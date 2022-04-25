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
    format: Flags.string({ char: "f", description: "Date format.", default: "m.dd", }),
    target: Flags.string({ char: "d", description: "Special day." }),
    verbose: Flags.boolean({ char: "v", description: "Show logs." }),
  };

  static args = [
    { name: "filename", description: "Create filename.", default: ".tmp.md" },
  ];

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Index);
    const target = nx.Date.create(flags.target);
    const range = nx.rangeDate(
      [target.getFullYear(), target.getMonth(), 26],
      [target.getFullYear(), target.getMonth() + 1, 25]
    );

    const rangeDates = range.map((date: any) => nx.Date.format(date, "date"));
    const dates = nx.Collection.diff(rangeDates, vacation);
    const res = dates
      .filter((date) => exchange.includes(date) || !nx.Date.isWeekend(date))
      .map((date) => nx.Date.format(date, flags.format) + " - " + "日志: xx");
    const result = res.join("\n");
    flags.verbose && this.log(result);
    fs.writeFileSync(args.filename, result);
  }
}
