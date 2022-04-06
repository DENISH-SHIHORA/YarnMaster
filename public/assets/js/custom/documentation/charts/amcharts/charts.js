"use strict";
var KTGeneralAmCharts = (function () {
  var e;
  return {
    init: function () {
      am4core.ready(function () {
        am4core.useTheme(am4themes_animated),
          ((e = am4core.create(
            "kt_amcharts_1",
            am4charts.XYChart
          )).colors.step = 2),
          (e.legend = new am4charts.Legend()),
          (e.legend.position = "top"),
          (e.legend.paddingBottom = 20),
          (e.legend.labels.template.maxWidth = 95);
        var a = e.xAxes.push(new am4charts.CategoryAxis());
        function r(a, r) {
          var t = e.series.push(new am4charts.ColumnSeries());
          (t.dataFields.valueY = a),
            (t.dataFields.categoryX = "category"),
            (t.name = r),
            t.events.on("hidden", d),
            t.events.on("shown", d);
          var u = t.bullets.push(new am4charts.LabelBullet());
          return (
            (u.interactionsEnabled = !1),
            (u.dy = 30),
            (u.label.text = "{valueY}"),
            (u.label.fill = am4core.color("#ffffff")),
            t
          );
        }
        function d() {
          var r = e.series.getIndex(0),
            d =
              1 -
              a.renderer.cellStartLocation -
              (1 - a.renderer.cellEndLocation);
          if (r.dataItems.length > 1) {
            var t = a.getX(r.dataItems.getIndex(0), "categoryX"),
              u =
                ((a.getX(r.dataItems.getIndex(1), "categoryX") - t) /
                  e.series.length) *
                d;
            if (am4core.isNumber(u)) {
              var o = e.series.length / 2,
                l = 0;
              e.series.each(function (a) {
                a.isHidden || a.isHiding
                  ? (a.dummyData = e.series.indexOf(a))
                  : ((a.dummyData = l), l++);
              });
              var n = l / 2;
              e.series.each(function (a) {
                var r = e.series.indexOf(a),
                  d = (a.dummyData - r + o - n) * u;
                a.animate(
                  { property: "dx", to: d },
                  a.interpolationDuration,
                  a.interpolationEasing
                ),
                  a.bulletsContainer.animate(
                    { property: "dx", to: d },
                    a.interpolationDuration,
                    a.interpolationEasing
                  );
              });
            }
          }
        }
        (a.dataFields.category = "category"),
          (a.renderer.cellStartLocation = 0.1),
          (a.renderer.cellEndLocation = 0.9),
          (a.renderer.grid.template.location = 0),
          (e.yAxes.push(new am4charts.ValueAxis()).min = 0),
          (e.data = [
            { category: "Place #1", first: 40, second: 55, third: 60 },
            { category: "Place #2", first: 30, second: 78, third: 69 },
            { category: "Place #3", first: 27, second: 40, third: 45 },
            { category: "Place #4", first: 50, second: 33, third: 22 },
          ]),
          r("first", "The First"),
          r("second", "The Second"),
          r("third", "The Third");
      }),
        am4core.ready(function () {
          am4core.useTheme(am4themes_animated),
            (e = am4core.create("kt_amcharts_2", am4charts.XYChart));
          for (var a = [], r = 1e3, d = 1200, t = 0; t < 360; t++)
            (r += Math.round(
              (Math.random() < 0.5 ? 1 : -1) * Math.random() * 100
            )),
              a.push({ date1: new Date(2015, 0, t), price1: r });
          for (t = 0; t < 360; t++)
            (d += Math.round(
              (Math.random() < 0.5 ? 1 : -1) * Math.random() * 100
            )),
              a.push({ date2: new Date(2017, 0, t), price2: d });
          e.data = a;
          var u = e.xAxes.push(new am4charts.DateAxis());
          (u.renderer.grid.template.location = 0),
            (u.renderer.labels.template.fill = am4core.color("#e59165"));
          var o = e.xAxes.push(new am4charts.DateAxis());
          (o.renderer.grid.template.location = 0),
            (o.renderer.labels.template.fill = am4core.color("#dfcc64"));
          var l = e.yAxes.push(new am4charts.ValueAxis());
          (l.tooltip.disabled = !0),
            (l.renderer.labels.template.fill = am4core.color("#e59165")),
            (l.renderer.minWidth = 60);
          var n = e.yAxes.push(new am4charts.ValueAxis());
          (n.tooltip.disabled = !0),
            (n.renderer.labels.template.fill = am4core.color("#dfcc64")),
            (n.renderer.minWidth = 60),
            (n.syncWithAxis = l);
          var y = e.series.push(new am4charts.LineSeries());
          (y.name = "2015"),
            (y.dataFields.dateX = "date1"),
            (y.dataFields.valueY = "price1"),
            (y.tooltipText = "{valueY.value}"),
            (y.fill = am4core.color("#e59165")),
            (y.stroke = am4core.color("#e59165"));
          var s = e.series.push(new am4charts.LineSeries());
          (s.name = "2017"),
            (s.dataFields.dateX = "date2"),
            (s.dataFields.valueY = "price2"),
            (s.yAxis = n),
            (s.xAxis = o),
            (s.tooltipText = "{valueY.value}"),
            (s.fill = am4core.color("#dfcc64")),
            (s.stroke = am4core.color("#dfcc64")),
            (e.cursor = new am4charts.XYCursor()),
            (e.cursor.xAxis = o);
          var i = new am4charts.XYChartScrollbar();
          i.series.push(y),
            (e.scrollbarX = i),
            (e.legend = new am4charts.Legend()),
            (e.legend.parent = e.plotContainer),
            (e.legend.zIndex = 100),
            (n.renderer.grid.template.strokeOpacity = 0.07),
            (o.renderer.grid.template.strokeOpacity = 0.07),
            (u.renderer.grid.template.strokeOpacity = 0.07),
            (l.renderer.grid.template.strokeOpacity = 0.07);
        }),
        am4core.ready(function () {
          am4core.useTheme(am4themes_dataviz),
            am4core.useTheme(am4themes_animated),
            ((e = am4core.create(
              "kt_amcharts_3",
              am4charts.PieChart
            )).hiddenState.properties.opacity = 0),
            (e.data = [
              { country: "Lithuania", value: 260 },
              { country: "Czechia", value: 230 },
              { country: "Ireland", value: 200 },
              { country: "Germany", value: 165 },
              { country: "Australia", value: 139 },
              { country: "Austria", value: 128 },
            ]);
          var a = e.series.push(new am4charts.PieSeries());
          (a.dataFields.value = "value"),
            (a.dataFields.radiusValue = "value"),
            (a.dataFields.category = "country"),
            (a.slices.template.cornerRadius = 6),
            (a.colors.step = 3),
            (a.hiddenState.properties.endAngle = -90),
            (e.legend = new am4charts.Legend());
        }),
        am4core.ready(function () {
          am4core.useTheme(am4themes_frozen),
            am4core.useTheme(am4themes_animated),
            (e = am4core.create(
              "kt_amcharts_4",
              am4plugins_timeline.SerpentineChart
            )).curveContainer.padding(20, 20, 20, 20),
            (e.levelCount = 8),
            (e.orientation = "horizontal"),
            (e.fontSize = 11);
          var a = new am4core.ColorSet();
          (a.saturation = 0.6),
            (e.data = [
              {
                category: "Module #1",
                start: "2016-01-10",
                end: "2016-01-13",
                color: a.getIndex(0),
                task: "Gathering requirements",
              },
              {
                category: "Module #1",
                start: "2016-02-05",
                end: "2016-04-18",
                color: a.getIndex(0),
                task: "Development",
              },
              {
                category: "Module #2",
                start: "2016-01-08",
                end: "2016-01-10",
                color: a.getIndex(5),
                task: "Gathering requirements",
              },
              {
                category: "Module #2",
                start: "2016-01-12",
                end: "2016-01-15",
                color: a.getIndex(5),
                task: "Producing specifications",
              },
              {
                category: "Module #2",
                start: "2016-01-16",
                end: "2016-02-05",
                color: a.getIndex(5),
                task: "Development",
              },
              {
                category: "Module #2",
                start: "2016-02-10",
                end: "2016-02-18",
                color: a.getIndex(5),
                task: "Testing and QA",
              },
              { category: "", task: "" },
              {
                category: "Module #3",
                start: "2016-01-01",
                end: "2016-01-19",
                color: a.getIndex(9),
                task: "Gathering requirements",
              },
              {
                category: "Module #3",
                start: "2016-02-01",
                end: "2016-02-10",
                color: a.getIndex(9),
                task: "Producing specifications",
              },
              {
                category: "Module #3",
                start: "2016-03-10",
                end: "2016-04-15",
                color: a.getIndex(9),
                task: "Development",
              },
              {
                category: "Module #3",
                start: "2016-04-20",
                end: "2016-04-30",
                color: a.getIndex(9),
                task: "Testing and QA",
              },
              {
                category: "Module #4",
                start: "2016-01-15",
                end: "2016-02-12",
                color: a.getIndex(15),
                task: "Gathering requirements",
              },
              {
                category: "Module #4",
                start: "2016-02-25",
                end: "2016-03-10",
                color: a.getIndex(15),
                task: "Development",
              },
              {
                category: "Module #4",
                start: "2016-03-23",
                end: "2016-04-29",
                color: a.getIndex(15),
                task: "Testing and QA",
              },
            ]),
            (e.dateFormatter.dateFormat = "yyyy-MM-dd"),
            (e.dateFormatter.inputDateFormat = "yyyy-MM-dd");
          var r = e.yAxes.push(new am4charts.CategoryAxis());
          (r.dataFields.category = "category"),
            (r.renderer.grid.template.disabled = !0),
            (r.renderer.labels.template.paddingRight = 25),
            (r.renderer.minGridDistance = 10),
            (r.renderer.innerRadius = -60),
            (r.renderer.radius = 60);
          var d = e.xAxes.push(new am4charts.DateAxis());
          (d.renderer.minGridDistance = 70),
            (d.baseInterval = { count: 1, timeUnit: "day" }),
            (d.renderer.tooltipLocation = 0),
            (d.startLocation = -0.5),
            (d.renderer.line.strokeDasharray = "1,4"),
            (d.renderer.line.strokeOpacity = 0.7),
            (d.tooltip.background.fillOpacity = 0.2),
            (d.tooltip.background.cornerRadius = 5),
            (d.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
              "alternativeBackground"
            )),
            (d.tooltip.label.paddingTop = 7);
          var t = d.renderer.labels.template;
          (t.verticalCenter = "middle"),
            (t.fillOpacity = 0.7),
            (t.background.fill = new am4core.InterfaceColorSet().getFor(
              "background"
            )),
            (t.background.fillOpacity = 1),
            t.padding(7, 7, 7, 7);
          var u = r.renderer.labels.template;
          (u.horizontalCenter = "left"),
            u.adapter.add("rotation", function (e, a) {
              var r = d.valueToPosition(d.min);
              return d.renderer.positionToAngle(r) + 90;
            });
          var o = e.series.push(new am4plugins_timeline.CurveColumnSeries());
          (o.columns.template.height = am4core.percent(20)),
            (o.columns.template.tooltipText =
              "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]"),
            (o.dataFields.openDateX = "start"),
            (o.dataFields.dateX = "end"),
            (o.dataFields.categoryY = "category"),
            (o.columns.template.propertyFields.fill = "color"),
            (o.columns.template.propertyFields.stroke = "color"),
            (o.columns.template.strokeOpacity = 0);
          var l = new am4charts.CircleBullet();
          o.bullets.push(l),
            (l.circle.radius = 3),
            (l.circle.strokeOpacity = 0),
            (l.propertyFields.fill = "color"),
            (l.locationX = 0);
          var n = new am4charts.CircleBullet();
          o.bullets.push(n),
            (n.circle.radius = 3),
            (n.circle.strokeOpacity = 0),
            (n.propertyFields.fill = "color"),
            (n.locationX = 1),
            (e.scrollbarX = new am4core.Scrollbar()),
            (e.scrollbarX.align = "center"),
            (e.scrollbarX.width = am4core.percent(90));
          var y = new am4plugins_timeline.CurveCursor();
          (e.cursor = y),
            (y.xAxis = d),
            (y.yAxis = r),
            (y.lineY.disabled = !0),
            (y.lineX.strokeDasharray = "1,4"),
            (y.lineX.strokeOpacity = 1),
            (d.renderer.tooltipLocation2 = 0),
            (r.cursorTooltipEnabled = !1);
        }),
        am4core.ready(function () {
          am4core.useTheme(am4themes_animated),
            ((e = am4core.create(
              "kt_amcharts_5",
              am4charts.RadarChart
            )).innerRadius = am4core.percent(30)),
            (e.fontSize = 11);
          var a = e.xAxes.push(new am4charts.CategoryAxis()),
            r = e.yAxes.push(new am4charts.CategoryAxis());
          (r.renderer.minGridDistance = 5),
            (a.renderer.labels.template.location = 0.5),
            (a.renderer.labels.template.bent = !0),
            (a.renderer.labels.template.radius = 5),
            (a.dataFields.category = "hour"),
            (r.dataFields.category = "weekday"),
            (a.renderer.grid.template.disabled = !0),
            (a.renderer.minGridDistance = 10),
            (r.renderer.grid.template.disabled = !0),
            (r.renderer.inversed = !0);
          var d = new am4charts.AxisLabelCircular();
          (d.bent = !0),
            d.events.on("validated", function (e) {
              e.target.fixPosition(
                -90,
                am4core.math.getDistance({
                  x: e.target.pixelX,
                  y: e.target.pixelY,
                }) - 5
              ),
                (e.target.dx = -e.target.pixelX),
                (e.target.dy = -e.target.pixelY);
            }),
            (r.renderer.labels.template = d);
          var t = e.series.push(new am4charts.RadarColumnSeries());
          (t.dataFields.categoryX = "hour"),
            (t.dataFields.categoryY = "weekday"),
            (t.dataFields.value = "value"),
            (t.sequencedInterpolation = !0);
          var u = t.columns.template;
          (u.strokeWidth = 2),
            (u.strokeOpacity = 1),
            (u.stroke = am4core.color("#ffffff")),
            (u.tooltipText =
              "{weekday}, {hour}: {value.workingValue.formatNumber('#.')}"),
            (u.width = am4core.percent(100)),
            (u.height = am4core.percent(100)),
            (e.seriesContainer.zIndex = -5),
            (u.hiddenState.properties.opacity = 0),
            t.heatRules.push({
              target: u,
              property: "fill",
              min: am4core.color("#fffb77"),
              max: am4core.color("#fe131a"),
            });
          var o = e.bottomAxesContainer.createChild(am4charts.HeatLegend);
          function l(e) {
            isNaN(e.dataItem.value)
              ? o.valueAxis.hideTooltip()
              : o.valueAxis.showTooltipAt(e.dataItem.value);
          }
          (o.width = am4core.percent(100)),
            (o.series = t),
            (o.valueAxis.renderer.labels.template.fontSize = 9),
            (o.valueAxis.renderer.minGridDistance = 30),
            t.columns.template.events.on("over", function (e) {
              l(e.target);
            }),
            t.columns.template.events.on("hit", function (e) {
              l(e.target);
            }),
            t.columns.template.events.on("out", function (e) {
              o.valueAxis.hideTooltip();
            }),
            (e.data = [
              { hour: "12pm", weekday: "Sunday", value: 2990 },
              { hour: "1am", weekday: "Sunday", value: 2520 },
              { hour: "2am", weekday: "Sunday", value: 2334 },
              { hour: "3am", weekday: "Sunday", value: 2230 },
              { hour: "4am", weekday: "Sunday", value: 2325 },
              { hour: "5am", weekday: "Sunday", value: 2019 },
              { hour: "6am", weekday: "Sunday", value: 2128 },
              { hour: "7am", weekday: "Sunday", value: 2246 },
              { hour: "8am", weekday: "Sunday", value: 2421 },
              { hour: "9am", weekday: "Sunday", value: 2788 },
              { hour: "10am", weekday: "Sunday", value: 2959 },
              { hour: "11am", weekday: "Sunday", value: 3018 },
              { hour: "12am", weekday: "Sunday", value: 3154 },
              { hour: "1pm", weekday: "Sunday", value: 3172 },
              { hour: "2pm", weekday: "Sunday", value: 3368 },
              { hour: "3pm", weekday: "Sunday", value: 3464 },
              { hour: "4pm", weekday: "Sunday", value: 3746 },
              { hour: "5pm", weekday: "Sunday", value: 3656 },
              { hour: "6pm", weekday: "Sunday", value: 3336 },
              { hour: "7pm", weekday: "Sunday", value: 3292 },
              { hour: "8pm", weekday: "Sunday", value: 3269 },
              { hour: "9pm", weekday: "Sunday", value: 3300 },
              { hour: "10pm", weekday: "Sunday", value: 3403 },
              { hour: "11pm", weekday: "Sunday", value: 3323 },
              { hour: "12pm", weekday: "Monday", value: 3346 },
              { hour: "1am", weekday: "Monday", value: 2725 },
              { hour: "2am", weekday: "Monday", value: 3052 },
              { hour: "3am", weekday: "Monday", value: 3876 },
              { hour: "4am", weekday: "Monday", value: 4453 },
              { hour: "5am", weekday: "Monday", value: 3972 },
              { hour: "6am", weekday: "Monday", value: 4644 },
              { hour: "7am", weekday: "Monday", value: 5715 },
              { hour: "8am", weekday: "Monday", value: 7080 },
              { hour: "9am", weekday: "Monday", value: 8022 },
              { hour: "10am", weekday: "Monday", value: 8446 },
              { hour: "11am", weekday: "Monday", value: 9313 },
              { hour: "12am", weekday: "Monday", value: 9011 },
              { hour: "1pm", weekday: "Monday", value: 8508 },
              { hour: "2pm", weekday: "Monday", value: 8515 },
              { hour: "3pm", weekday: "Monday", value: 8399 },
              { hour: "4pm", weekday: "Monday", value: 8649 },
              { hour: "5pm", weekday: "Monday", value: 7869 },
              { hour: "6pm", weekday: "Monday", value: 6933 },
              { hour: "7pm", weekday: "Monday", value: 5969 },
              { hour: "8pm", weekday: "Monday", value: 5552 },
              { hour: "9pm", weekday: "Monday", value: 5434 },
              { hour: "10pm", weekday: "Monday", value: 5070 },
              { hour: "11pm", weekday: "Monday", value: 4851 },
              { hour: "12pm", weekday: "Tuesday", value: 4468 },
              { hour: "1am", weekday: "Tuesday", value: 3306 },
              { hour: "2am", weekday: "Tuesday", value: 3906 },
              { hour: "3am", weekday: "Tuesday", value: 4413 },
              { hour: "4am", weekday: "Tuesday", value: 4726 },
              { hour: "5am", weekday: "Tuesday", value: 4584 },
              { hour: "6am", weekday: "Tuesday", value: 5717 },
              { hour: "7am", weekday: "Tuesday", value: 6504 },
              { hour: "8am", weekday: "Tuesday", value: 8104 },
              { hour: "9am", weekday: "Tuesday", value: 8813 },
              { hour: "10am", weekday: "Tuesday", value: 9278 },
              { hour: "11am", weekday: "Tuesday", value: 10425 },
              { hour: "12am", weekday: "Tuesday", value: 10137 },
              { hour: "1pm", weekday: "Tuesday", value: 9290 },
              { hour: "2pm", weekday: "Tuesday", value: 9255 },
              { hour: "3pm", weekday: "Tuesday", value: 9614 },
              { hour: "4pm", weekday: "Tuesday", value: 9713 },
              { hour: "5pm", weekday: "Tuesday", value: 9667 },
              { hour: "6pm", weekday: "Tuesday", value: 8774 },
              { hour: "7pm", weekday: "Tuesday", value: 8649 },
              { hour: "8pm", weekday: "Tuesday", value: 9937 },
              { hour: "9pm", weekday: "Tuesday", value: 10286 },
              { hour: "10pm", weekday: "Tuesday", value: 9175 },
              { hour: "11pm", weekday: "Tuesday", value: 8581 },
              { hour: "12pm", weekday: "Wednesday", value: 8145 },
              { hour: "1am", weekday: "Wednesday", value: 7177 },
              { hour: "2am", weekday: "Wednesday", value: 5657 },
              { hour: "3am", weekday: "Wednesday", value: 6802 },
              { hour: "4am", weekday: "Wednesday", value: 8159 },
              { hour: "5am", weekday: "Wednesday", value: 8449 },
              { hour: "6am", weekday: "Wednesday", value: 9453 },
              { hour: "7am", weekday: "Wednesday", value: 9947 },
              { hour: "8am", weekday: "Wednesday", value: 11471 },
              { hour: "9am", weekday: "Wednesday", value: 12492 },
              { hour: "10am", weekday: "Wednesday", value: 9388 },
              { hour: "11am", weekday: "Wednesday", value: 9928 },
              { hour: "12am", weekday: "Wednesday", value: 9644 },
              { hour: "1pm", weekday: "Wednesday", value: 9034 },
              { hour: "2pm", weekday: "Wednesday", value: 8964 },
              { hour: "3pm", weekday: "Wednesday", value: 9069 },
              { hour: "4pm", weekday: "Wednesday", value: 8898 },
              { hour: "5pm", weekday: "Wednesday", value: 8322 },
              { hour: "6pm", weekday: "Wednesday", value: 6909 },
              { hour: "7pm", weekday: "Wednesday", value: 5810 },
              { hour: "8pm", weekday: "Wednesday", value: 5151 },
              { hour: "9pm", weekday: "Wednesday", value: 4911 },
              { hour: "10pm", weekday: "Wednesday", value: 4487 },
              { hour: "11pm", weekday: "Wednesday", value: 4118 },
              { hour: "12pm", weekday: "Thursday", value: 3689 },
              { hour: "1am", weekday: "Thursday", value: 3081 },
              { hour: "2am", weekday: "Thursday", value: 6525 },
              { hour: "3am", weekday: "Thursday", value: 6228 },
              { hour: "4am", weekday: "Thursday", value: 6917 },
              { hour: "5am", weekday: "Thursday", value: 6568 },
              { hour: "6am", weekday: "Thursday", value: 6405 },
              { hour: "7am", weekday: "Thursday", value: 8106 },
              { hour: "8am", weekday: "Thursday", value: 8542 },
              { hour: "9am", weekday: "Thursday", value: 8501 },
              { hour: "10am", weekday: "Thursday", value: 8802 },
              { hour: "11am", weekday: "Thursday", value: 9420 },
              { hour: "12am", weekday: "Thursday", value: 8966 },
              { hour: "1pm", weekday: "Thursday", value: 8135 },
              { hour: "2pm", weekday: "Thursday", value: 8224 },
              { hour: "3pm", weekday: "Thursday", value: 8387 },
              { hour: "4pm", weekday: "Thursday", value: 8218 },
              { hour: "5pm", weekday: "Thursday", value: 7641 },
              { hour: "6pm", weekday: "Thursday", value: 6469 },
              { hour: "7pm", weekday: "Thursday", value: 5441 },
              { hour: "8pm", weekday: "Thursday", value: 4952 },
              { hour: "9pm", weekday: "Thursday", value: 4643 },
              { hour: "10pm", weekday: "Thursday", value: 4393 },
              { hour: "11pm", weekday: "Thursday", value: 4017 },
              { hour: "12pm", weekday: "Friday", value: 4022 },
              { hour: "1am", weekday: "Friday", value: 3063 },
              { hour: "2am", weekday: "Friday", value: 3638 },
              { hour: "3am", weekday: "Friday", value: 3968 },
              { hour: "4am", weekday: "Friday", value: 4070 },
              { hour: "5am", weekday: "Friday", value: 4019 },
              { hour: "6am", weekday: "Friday", value: 4548 },
              { hour: "7am", weekday: "Friday", value: 5465 },
              { hour: "8am", weekday: "Friday", value: 6909 },
              { hour: "9am", weekday: "Friday", value: 7706 },
              { hour: "10am", weekday: "Friday", value: 7867 },
              { hour: "11am", weekday: "Friday", value: 8615 },
              { hour: "12am", weekday: "Friday", value: 8218 },
              { hour: "1pm", weekday: "Friday", value: 7604 },
              { hour: "2pm", weekday: "Friday", value: 7429 },
              { hour: "3pm", weekday: "Friday", value: 7488 },
              { hour: "4pm", weekday: "Friday", value: 7493 },
              { hour: "5pm", weekday: "Friday", value: 6998 },
              { hour: "6pm", weekday: "Friday", value: 5941 },
              { hour: "7pm", weekday: "Friday", value: 5068 },
              { hour: "8pm", weekday: "Friday", value: 4636 },
              { hour: "9pm", weekday: "Friday", value: 4241 },
              { hour: "10pm", weekday: "Friday", value: 3858 },
              { hour: "11pm", weekday: "Friday", value: 3833 },
              { hour: "12pm", weekday: "Saturday", value: 3503 },
              { hour: "1am", weekday: "Saturday", value: 2842 },
              { hour: "2am", weekday: "Saturday", value: 2808 },
              { hour: "3am", weekday: "Saturday", value: 2399 },
              { hour: "4am", weekday: "Saturday", value: 2280 },
              { hour: "5am", weekday: "Saturday", value: 2139 },
              { hour: "6am", weekday: "Saturday", value: 2527 },
              { hour: "7am", weekday: "Saturday", value: 2940 },
              { hour: "8am", weekday: "Saturday", value: 3066 },
              { hour: "9am", weekday: "Saturday", value: 3494 },
              { hour: "10am", weekday: "Saturday", value: 3287 },
              { hour: "11am", weekday: "Saturday", value: 3416 },
              { hour: "12am", weekday: "Saturday", value: 3432 },
              { hour: "1pm", weekday: "Saturday", value: 3523 },
              { hour: "2pm", weekday: "Saturday", value: 3542 },
              { hour: "3pm", weekday: "Saturday", value: 3347 },
              { hour: "4pm", weekday: "Saturday", value: 3292 },
              { hour: "5pm", weekday: "Saturday", value: 3416 },
              { hour: "6pm", weekday: "Saturday", value: 3131 },
              { hour: "7pm", weekday: "Saturday", value: 3057 },
              { hour: "8pm", weekday: "Saturday", value: 3227 },
              { hour: "9pm", weekday: "Saturday", value: 3060 },
              { hour: "10pm", weekday: "Saturday", value: 2855 },
              { hour: "11pm", weekday: "Saturday", value: 2625 },
            ]);
        });
    },
  };
})();
KTUtil.onDOMContentLoaded(function () {
  KTGeneralAmCharts.init();
});
