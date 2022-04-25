import { Command, Flags } from "@oclif/core";
import calendarVacation from "@jswork/calendar-vacation";
import * as fs from "fs";
import nx from "@jswork/next";
import "@jswork/next-range-date";
import "@jswork/next-date";
import "@jswork/next-collection";

const { exchange, vacation } = calendarVacation();

export default class Index extends Command {
  static description = "Generate monthly.";

  static flags = {
    date: Flags.string({
      char: "d",
      description: "Special day.",
    }),
  };

  static args = [
    { name: "filename", description: "Create filename.", default: ".tmp.md" },
  ];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Index);
    const now = nx.Date.create(flags.date);
    const start = new Date(now.getFullYear(), now.getMonth() - 1, 25);
    const end = new Date(now.getFullYear(), now.getMonth(), 26);
    const range = nx.rangeDate(
      nx.Date.format(start, "date"),
      nx.Date.format(end, "date")
    );
    const rangeDates = range.map((date: any) => nx.Date.format(date, "date"));
    const dates = nx.Collection.diff(rangeDates, vacation);
    const res = dates
      .map((date: string) => {
        const isWorkday = exchange.includes(date) || !nx.Date.isWeekend(date);
        return isWorkday
          ? nx.Date.format(date, "mm.dd") + " - " + "日志: xx"
          : null;
      })
      .filter(Boolean);
    fs.writeFileSync(args.filename, res.join("\n"));
  }
}
