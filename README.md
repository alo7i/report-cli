# report-cli
> Report helper.

## installation
```shell
# public
npm i -g @jswork/report-cli

# private
git clone git@github.com:alo7i/report-cli.git
# git clone https://github.com/alo7i/report-cli.git
cd report-cli && npm link
```

## usage
```shell
# 当前月份/.tmp.md 文件
report-cli g
# 指定日期
report-cli g -d=2022-05-25
# 下个月的日期
report-cli g test.md -d=2022-04-25
```
