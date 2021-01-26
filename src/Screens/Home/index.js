import React, { Component } from "react";
import { Link } from "react-router-dom";

import Layout from "Components/Layout";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      isLoading: true,
      limit: 10,
      offset: 0,
    };
  }

  componentDidMount() {
    this.fetchdataDenganFetch();
  }

  fetchdataDenganFetch = () => {
    const { limit, offset } = this.state;
    this.setState({ isLoading: true });
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ pokemons: data.results, isLoading: false })
      )
      .catch((error) => console.log(error));
  };

  render() {
    const { pokemons, isLoading, offset } = this.state;

    return (
      <Layout>
        <div className="home">
          <div className="home__title">Poke Apps</div>

          <div className="home__grid container">
            {pokemons.length === 0 || isLoading
              ? null
              : pokemons.map((pokemon, index) => {
                  return (
                    <div className="home__grid__item" key={index}>
                      <button
                        className="home__grid__item__save"
                        onClick={() => null}
                      >
                        +
                      </button>

                      <Link
                        className="home__grid__item__content"
                        to={`/pokemon/${offset === 0 ? index + 1 : offset + 1}`}
                      >
                        <span>{pokemon?.name}</span>
                      </Link>
                    </div>
                  );
                })}
          </div>
        </div>
      </Layout>
    );
  }
}
