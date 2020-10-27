import React from "react";
import "./index.scss";
import { Progress, Tag } from "antd";
import DefaultImgPokemon from "../../img/defaultPokemon.png";
import { useHistory } from "react-router-dom";
import ArrowPrev from "./ArrowPrev";
import ArrowNext from "./ArrowNext";
import male from "../../img/male.png";
import female from "../../img/female.png";
import backArrow from "../../img/back.png";
import nextArrow from "../../img/forward.png";
const colorTypes = {
  normal: "#696969",
  fighting: "#FF7F50",
  flying: "#5F9EA0",
  poison: "#8A2BE2",
  ground: "#F4A460",
  rock: "#808000",
  bug: "#6B8E23",
  ghost: "#483D8B",
  steel: "#2F4F4F",
  fire: "#FF4500",
  water: "#00BFFF",
  grass: "#008000",
  electric: "#FFD700",
  psychic: "#BA55D3",
  ice: "#00FFFF",
  dragon: "#5F9EA0",
  dark: "#696969",
  fairy: "#FFC0CB",
};

const PokemonDetailInformation = ({
  pokemon,
  pokemonIMG,
  typePokemon,
  id,
  nameGenderless,
  nameMale,
  nameFemale,
}) => {
  const history = useHistory();

  const newId = id < 10 ? "00" + id : id < 100 ? "0" + id : id;
  const rendomHP = Math.floor(Math.random() * 100) + 20;
  const randomAttack = Math.floor(Math.random() * 50) + 10;
  const randomSpeed = Math.floor(Math.random() * 70) + 10;

  const prevPoke = () => history.push(`/pokemon/${+id - 1}`);

  const prevNext = () => history.push(`/pokemon/${+id + 1}`);

  return (
    <div className="pokemon-arrow-container">
      {id === 1 ? (
        <ArrowPrev prevPoke={prevPoke} />
      ) : id > 1 ? (
        <ArrowPrev prevPoke={prevPoke} />
      ) : (
        ""
      )}
      <div className="pokemon-wrapper">
        <p>
          {pokemon.name}
          <span> #{newId}</span>
        </p>
        <div className="arrows-wrapper">
          {id === 1 ? (
            <img
              onClick={prevPoke}
              className="arrowResLeft"
              src={backArrow}
              alt="backArrow"
            />
          ) : id > 1 ? (
            <img
              onClick={prevPoke}
              className="arrowResLeft"
              src={backArrow}
              alt="backArrow"
            />
          ) : (
            ""
          )}
          {id < 10107 && (
            <img
              onClick={prevNext}
              className="arrowResRight"
              src={nextArrow}
              alt="nextArrow"
            />
          )}
        </div>
        <div className="main-content">
          <div className="blockImgStatus">
            <div>
              <img
                className="widthImgPokemon"
                src={pokemonIMG}
                alt={pokemon.name}
                onError={(e) => (e.target.src = DefaultImgPokemon)}
              />
            </div>
            <div className="characteristics-wrapper">
              <p>Status</p>
              <div>
                <Progress
                  width={100}
                  percent={rendomHP}
                  status="active"
                  format={(percent) => "HP " + percent}
                />
                <Progress
                  percent={pokemon.base_experience}
                  status="active"
                  format={(percent) => "Base experience " + percent}
                />
                <Progress
                  percent={pokemon.stats[0].base_stat}
                  status="active"
                  format={(percent) => "Base stat " + percent}
                />
                <Progress
                  percent={randomAttack}
                  format={(percent) => "Attack " + percent}
                />
                <Progress
                  percent={randomSpeed}
                  format={(percent) => "Speed " + percent}
                  status="active"
                />
              </div>
            </div>
          </div>
          <div className="physical-characteristics">
            <div className="physical-characteristics__top-container">
              <div className="main-characteristics">
                <div className="main-characteristics__height">
                  Height
                  <span>{pokemon.height}</span>
                </div>

                <div className="main-characteristics__weight">
                  Weight
                  <span>{pokemon.weight}</span>
                </div>
                <div className="main-characteristics__gender">Gender</div>
                {nameMale() ? (
                  <img className="genderMale" src={male} alt="male" />
                ) : (
                  ""
                )}
                {nameFemale() ? (
                  <img className="genderFemale" src={female} alt="female" />
                ) : (
                  ""
                )}
                {nameGenderless() ? <div>Genderless</div> : ""}
              </div>
              <div className="additional-characteristics">
                <div className="additional-characteristics__category">
                  Category
                  <span> {pokemon.moves[0].move.name}</span>
                </div>

                <div className="additional-characteristics__abilities">
                  Abilities
                </div>
                <div className="additional-characteristics__abilities-content">
                  This Pokémon's damaging moves have a 10% chance to make the
                  target flinch with each hit if they do not already cause
                  flinching as a secondary effect.
                </div>
              </div>
            </div>
            <div className="physical-characteristics__bottom-container">
              <div className="physical-characteristics__bottom-container-type">
                <div>Type</div>
                <div className="type-wrapper">
                  {typePokemon.map((i, ind) => (
                    <Tag key={ind} color={colorTypes[i.type.name]}>
                      {i.type.name}
                    </Tag>
                  ))}
                </div>
              </div>
              <div>
                <div className="physical-characteristics__bottom-container-weaknesses">Weaknesses</div>
                <h2 className="WeaknessesText">
                  {pokemon.abilities.map((i) => i.ability.name).join(" ")}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {id < 10107 && <ArrowNext prevNext={prevNext} />}
    </div>
  );
};

export default PokemonDetailInformation;
