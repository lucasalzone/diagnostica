myapp
  .directive('components', components)
  .directive('componentTab', componentTab)
  .directive('breadcrumbs', breadcrumbs)
  .directive('navbar', navbar);

function navbar() {
  return {
		restrict: 'EA',
		templateUrl: 'template/navbar.html'
  };
}

function breadcrumbs() {
  return {
		restrict: 'EA',
		templateUrl: 'template/breadcrumbs.html'
  };
}

function components() {
  return {
		restrict: 'EA',
		templateUrl: 'template/components.html'
  };
}

function componentTab(){
	return {
		restrict: 'EA',
    scope: {
      component: '=component',
      message: '=message'
    },
		templateUrl: 'template/componentTab.html'
	}
}
