<h1 align="center" href="https://github.com/blueC4P/football-app">Football App ⚽ + ⚛️</h1>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project-📣">About The Project</a>
      <ul>
        <li><a href="#built-with-🤖">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started-🏁">Getting Started</a>
      <ul>
        <li><a href="#prerequisites-✅">Prerequisites</a></li>
        <li><a href="#installation-👨🏼‍💻">Installation</a></li>
        <li><a href="#run-demo-🚀">Run DEMO</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

# About The Project 📣

The project is an exercise in a technical test. It consists of a functional application in which the client can view soccer leagues and the different teams that play in each league and their players.

The fictitious client wants to easily add, edit and search the file of all the players of the different teams and the same for the teams.

Summary of tasks:

- View Leagues
- Equipment CRUD
- Player CRUD

<br>

## Built With 🤖

- [React](https://reactjs.org/)

- [Bootstrap](https://getbootstrap.com)

- [JSON-Server](https://github.com/typicode/json-server#json-server--)

<br>

<!-- GETTING STARTED -->

# Getting Started 🏁

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

<br>

## Prerequisites ✅


This is an example of how to list things you need to use the software and how to install them.

- npm

  ```sh
  npm install npm@latest -g
  ```

- json-server

  ```sh
  npm install -g json-server
  ```

  <br>

## Installation 👨🏼‍💻

1. Clone the repo

   ```sh
   git clone https://github.com/blueC4P/football-app.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Create a  `db.json` and run the server

   ```sh
   json-server --watch db.json
   ```

   <br>

## Run DEMO 🚀

1. Run json-server (default port: 3000)

   ```sh
   json-server --watch db.json
   ```
2. Run developing server (default port: 3000)

   ```sh
   npm start
   ```
   <br>

Please run json-server first and then the front server, this is cause of both (front && back) have the same default port (in this case, the default port is 3000). So when you run json-server first and then you try to run the front server, you gonna see this message in the prompt : "Would you like to run the app on another port instead? › (Y/n)" ... Press <b>y</b> to run front server in other port.