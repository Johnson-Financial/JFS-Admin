<h1 align="center">
  <br>
  <a href="https://jfsapp.com"><img src="https://jfsapp.com/Open/API/Images/Brand/Logos/JFS_New/logo-flat.png" alt="Markdownify" width="200"></a>
  <br>
  Management Portal
  <br>
</h1>

<h4 align="center">Recruiting Management Tool</h4>



<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>


> This is the management portal for the Johnson Financial Service Website.

<p align="center">
    <img src="https://raw.githubusercontent.com/codyscottjohnson/JFS-Admin/master/preview/Dashboard.png" />

</p>
<p align="center">
    <img src="https://raw.githubusercontent.com/codyscottjohnson/JFS-Admin/master/preview/Recruiting.png" width="49%"/>
    <img src="https://raw.githubusercontent.com/codyscottjohnson/JFS-Admin/master/preview/Task.png" width="49%"/>
    <img src="https://raw.githubusercontent.com/codyscottjohnson/JFS-Admin/master/preview/Email.png" width="49%"/>

</p>

## Build & development
#### requirements

#### Initial Setup
Download the repository and from the main directory run

```
npm install
bower install
```
#### using yeoman

If you have [`yeoman`](https://yeoman.io/) installed, you can use yeoman to generate new templates, the projector is set up using [yo angular generator](https://github.com/yeoman/generator-angular)
so to add a new controller you could simply call

```
yo angular:controller myController

```

which will create the controller, set up test and inject the controller into you index.html

#### LESS

The Project is set up to use <img style="height:30px;width:30px" src='http://devicon.fr/devicon.git/icons/less/less-plain-wordmark.svg'/>. The main less file is `/app/style/app.less` which is compiled to `/app/style/app.css` as part of the grunt process.

#### Building and Testing

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Deploying to Production

This is a test
```
grunt ssh_deploy:production

```
