var data = [
    {
      title:"Title 1",
      body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis feugiat risus nec commodo. Nam hendrerit sodales ipsum, et scelerisque velit. Nulla placerat leo at blandit consectetur. Aliquam erat volutpat.",
      source:"reddit"
    },
    {
      title:"Title 2",
      body:"Nullam venenatis sapien at efficitur vulputate. Vestibulum ex quam, suscipit vel sagittis vitae, malesuada in leo. Quisque fringilla diam non vehicula venenatis. Pellentesque et sagittis neque",
      source:"reddit"
    },
    {
      title:"Title 3",
      body:"Nullam venenatis sapien at efficitur vulputate. Vestibulum ex quam",
      source:"reddit"
    },
  {
      title:"Title 4",
      body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis feugiat risus nec commodo. Nam hendrerit sodales ipsum, et scelerisque velit. Nulla placerat leo at blandit consectetur. Aliquam erat volutpat.",
      source:"reddit"
    },
    {
      title:"Title 5",
      body:"Nullam venenatis sapien at efficitur vulputate. Vestibulum ex quam, suscipit vel sagittis vitae, malesuada in leo. Quisque fringilla diam non vehicula venenatis. Pellentesque et sagittis neque",
      source:"reddit"
    },
    {
      title:"Title 6",
      body:"Nullam venenatis sapien at efficitur vulputate. Vestibulum ex quam",
      source:"reddit"
    },
  {
      title:"Title 7",
      body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis feugiat risus nec commodo. Nam hendrerit sodales ipsum, et scelerisque velit. Nulla placerat leo at blandit consectetur. Aliquam erat volutpat.",
      source:"reddit"
    },
    {
      title:"Title 8",
      body:"Nullam venenatis sapien at efficitur vulputate. Vestibulum ex quam, suscipit vel sagittis vitae, malesuada in leo. Quisque fringilla diam non vehicula venenatis. Pellentesque et sagittis neque",
      source:"reddit"
    },
    {
      title:"Title 9",
      body:"Nullam venenatis sapien at efficitur vulputate. Vestibulum ex quam",
      source:"reddit"
    },
  {
      title:"Title 10",
      body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis feugiat risus nec commodo. Nam hendrerit sodales ipsum, et scelerisque velit. Nulla placerat leo at blandit consectetur. Aliquam erat volutpat.",
      source:"reddit"
    },
    {
      title:"Title 11",
      body:"Nullam venenatis sapien at efficitur vulputate. Vestibulum ex quam, suscipit vel sagittis vitae, malesuada in leo. Quisque fringilla diam non vehicula venenatis. Pellentesque et sagittis neque",
      source:"reddit"
    },
    {
      title:"Title 12",
      body:"Nullam venenatis sapien at efficitur vulputate. Vestibulum ex quam",
      source:"reddit"
    }
];

// Function to create columns for Masonry
// Just pass in how many columns you need
var createColumns = function(numberOfColumns){
  var columns = "";
  for(var i = 1; i <= numberOfColumns; i++){
    columns += '<section id="column' + i + '" class="col"></section>';
  };
  return columns;
};

// populateColumns function takes an array of data
// and the numberOfColumns to populate with cards
var populateColumns = function(array, numberOfColumns){

    // Loops through array
    _.each(array, function(data) {
        // Setting the index of data within array
        // Create base HTML for each card & finding each column
        var index = array.indexOf(data),
            card = '<div class="explore-card"><h2>' + data.title + '</h2><p>' + data.body + '</p></div>',
            column1 = $('.container #column1'),
            column2 = $('.container #column2'),
            column3 = $('.container #column3');

        // Checking for numberOfColumns
        // Populating columns based on index of data
        // Columns should be populated left to right
        if(numberOfColumns == 3){
            if(index % 3 == 0) {
                column1.append(card)
            } else if(index % 2 == 0) {
                column3.append(card)
            } else {
                column2.append(card)
            }
        } else if(numberOfColumns == 2){
            if(index % 2 == 0) {
              column1.append(card)
            } else {
              column2.append(card)
            }
        } else {
            column1.append(card);
        }
    });
};

// Function to create our Masonry layout
// and to populate with cards
var createMasonry = function(array, layout){

  // Setting our container for where our columns will be placed
  var container = $('.container');

  // Initalizing & Populating Columns
  if(window.innerWidth > 800){
    container.append(createColumns(3));
    populateColumns(array, 3);
  } else if(window.innerWidth > 500) {
    container.append(createColumns(2));
    populateColumns(array, 2);
  } else {
    container.append(createColumns(1));
    populateColumns(array, 1);
  }
  // Checking on window.resize to calcuate how many columns should show
  $(window).resize(function(){
    var checkIfThreeCol = $(".container #column3").length,
        checkIfTwoCol = $(".container #column2").length;

    // Detects window width on resize and recreates columns based on the width
    if(window.innerWidth < 800 && checkIfThreeCol != 0){
      container.empty()
        .end()
        container.append(createColumns(2));
      populateColumns(array, 2);
    } else if(window.innerWidth > 800 && checkIfThreeCol == 0){
      container.empty()
        .end()
        container.append(createColumns(3));
      populateColumns(array, 3);
    } else if(window.innerWidth < 500 && checkIfTwoCol != 0){
      container.empty()
        .end()
        container.append(createColumns(1));
      populateColumns(array, 1);
    } else if(window.innerWidth > 500 && checkIfTwoCol == 0){
      container.empty()
        .end()
        container.append(createColumns(2));
      populateColumns(array, 2);
    };
  });

};


createMasonry(data);