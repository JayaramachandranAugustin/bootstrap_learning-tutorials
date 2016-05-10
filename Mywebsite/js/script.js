/**
 * 
 */

$('.carousel').carousel({
	interval:2000
});


//init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.project-item',
  layoutMode: 'fitRows',
  getSortData: {
	  name: '.name'
  }
});

//bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  filterValue =  filterValue;
  $grid.isotope({ filter: filterValue });
});


//bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  console.log(sortByValue);
  $grid.isotope({ sortBy: sortByValue });
});
