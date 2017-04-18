
angular.module("ShanePortfolioApp", ['ngRoute'])

    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when('/home', {
                controller: "HomeController",
                templateUrl: 'home/home.html'
            })
            .when('/about', {
                controller: "AboutController",
                templateUrl: 'about/about.html'
            })
            .when('/portfolio', {
                controller: "PortfolioController",
                templateUrl: "portfolio/portfolio.html"
            })
            .when('/contact', {
                controller: "ContactController",
                templateUrl: "contact/contact.html"
            })
            .otherwise({
                redirectTo: "/home"
            })
}])
