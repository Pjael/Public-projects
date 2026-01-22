

//from stakc overflow answers: https://jsfiddle.net/Kevin_Granger/R4h7A/
// for donut chart of expenses
var data = [
    { Browser: "Internet Explorer", Share: 33.3 },
    { Browser: "Firefox", Share: 26.5 },
    { Browser: "Chrome", Share: 25.4 },
    { Browser: "Safari", Share: 7.0 },
    { Browser: "Opera", Share: 4.6 },
    { Browser: "Other", Share: 3.2 }
]

// prepare chart data as an array
var source =
{
    datatype: "array",
    datafields: [
        { name: 'Browser' },
        { name: 'Share' }
    ],
    localdata: data
};

var dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); } });

// prepare jqxChart settings
var settings = {
    title: "Desktop browsers share in Dec 2011",
    description: "(source: wikipedia.org)",
    enableAnimations: true,
    showLegend: false,
    legendPosition: { left: 520, top: 140, width: 100, height: 100 },
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
    source: dataAdapter,
    colorScheme: 'scheme02',
    seriesGroups:
        [
            {
                type: 'donut',
                showLabels: true,
                series:
                    [
                        {
                            dataField: 'Share',
                            displayText: 'Browser',
                            labelRadius: 150,
                            initialAngle: 15,
                            radius: 130,
                            innerRadius: 120,
                            centerOffset: 0,
                            formatSettings: { sufix: '%', decimalPlaces: 1 }
                        }
                    ]
            }
        ]
};

// setup the chart
$('#jqxChart').jqxChart(settings);

//add expense button mechanism
document.getElementById('addButton').addEventListener('click', function () {
    // Get value from an input field (example)
    const inputField = document.getElementById('itemInput');
    const newItemText = inputField.value;

    if (newItemText) { // Check if input is not empty
        const list = document.getElementById('itemList');
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
        list.appendChild(newItem);
        inputField.value = ''; // Clear the input field
    }
});
