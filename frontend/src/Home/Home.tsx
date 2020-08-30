import React, { Component } from 'react';

import {
  Container,
  Grid,
} from '@material-ui/core';


import httpService from '../httpService';
import { AxiosResponse } from 'axios';

interface IProps {};

interface ICompetition {
    id: number;
    area: object;
    name: string;
    code: string;
    plan: string;
    lastUpdated: string;
};

interface IScore {
    winner: string;
    duration: string;
    fullTime: {
        homeTeam: number | null;
        awayTeam: number | null;
    };
    halfTime: {
        homeTeam: number | null;
        awayTeam: number | null;
    };
    extraTime: {
        homeTeam: number | null;
        awayTeam: number | null;
    };
    penalties: {
        homeTeam: number | null;
        awayTeam: number | null;
    };
};

interface ITeam {
    id: number;
    name: string;
};

interface IReferee {
    id: number;
    name: string;
    nationality: string | null;
};

interface IMatch {
    id: number;
    season: object;
    utcDate: string;
    status: 'SCHEDULED' | 'LIVE' | 'IN_PLAY' | 'PAUSED' | 'FINISHED' | 'POSTPONED' | 'SUSPENDED' | 'CANCELED';
    matchday: number;
    stage: string;
    group: string;
    lastUpdated: string;
    score: IScore;
    homeTeam: ITeam;
    awayTeam: ITeam;
    referees: IReferee[];
};

interface IState {
    matchday: number,
    matches: IMatch[],
    competition: ICompetition | null,
    error: boolean,
    totalMatchdays: number,
};


class Home extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        /** localStorage **/
        let matchday;
        if (localStorage.getItem('lastFetchedMatchday')) {
            matchday = Number(localStorage.getItem('lastFetchedMatchday'));
        } else {
            matchday = 1;
            localStorage.setItem('lastFetchedMatchday', matchday.toString());
        }
        
         /** localStorage **/
        this.state = {
            matchday,
            matches: [],
            competition: null,
            error: false,
            totalMatchdays: 38,
        };
    }

    fetch = () => {
    httpService
        .get(`/v2/competitions/2019/matches?matchday=${this.state.matchday}`)
        .then((response: AxiosResponse) => {
        this.setState({
            competition: response.data.competition,
            matches: response.data.matches,
        });
        console.log("response", this.state.matches);
        })
        .catch((error: AxiosResponse) => {
        this.setState({ error: true });
        });
    };

    componentDidMount() {
        this.fetch();
    }

    handleChange = (event: any) => {
        this.setState({ matchday: event.target.value }, () => {
            /** localStorage **/
            localStorage.setItem('lastFetchedMatchday', this.state.matchday.toString());
            /** localStorage **/
            this.fetch();
        });
    };

    render() {
        const options = [];
        for (let index = 1; index <= this.state.totalMatchdays; index++) {
            options.push(<option key={index}>{index}</option>)
        }
        return (
        <Container>
            <select onChange={this.handleChange} value={this.state.matchday}>
                {options}
            </select>
            <ul>
                {this.state.matches.map((match: IMatch) => (
                    <li key={match.id}>
                    {match.homeTeam.name} <b>{match.score.fullTime.homeTeam}</b> - <b>{match.score.fullTime.awayTeam}</b> {match.awayTeam.name}
                    </li>
                ))}
            </ul>
        </Container>
        );
    }
};


export default Home;