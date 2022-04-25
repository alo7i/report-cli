import { expect, test } from "@oclif/test";
import fs from "fs";

describe("report-cli should create .tmp.md file", () => {
  fs.existsSync(".tmp.md") && fs.rmSync(".tmp.md");

  test
    .stdout()
    .command(["g"])
    .it("runs generate report", (ctx) => {
      expect(fs.existsSync(".tmp.md")).to.eq(true);
    });
});
