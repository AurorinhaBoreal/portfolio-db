import votacaoFront from "../assets/projects/votacaoFront.jpg";
import votacaoBack from "../assets/projects/votacaoBack.jpg";
import personFront from "../assets/projects/personFront.jpg";
import personBack from "../assets/projects/personBack.jpg";
import cypress from "../assets/projects/cypress.jpg";
import restAssured from "../assets/projects/restAssured.jpg";

export function getProjectImage() {
    const projectImages: string[] = [
        votacaoFront, 
        votacaoBack,
        cypress,
        restAssured,
        personFront,
        personBack,
        cypress,
        restAssured
    ]
    return projectImages;
}

export function getProjectTitle() {
    const projectTitles: string[] = [
        "Votação Front-End",
        "Votação Back-End",
        "Votação Cypress",
        "Votação RestAssured",
        "Pessoa Front-End",
        "Pessoa Back-End",
        "Pessoa Cypress",
        "Pessoa RestAssured"
    ]
    return projectTitles;
}

export function getProjectTag() {
    const projectTag: string[][] = [
        ["REACT", "TYPESCRIPT", "CHAKRA UI"],
        ["SPRING BOOT", "DOCKER", "POSTGRES"],
        ["JAVASCRIPT", "CYPRESS"],
        ["JAVA", "REST ASSURED"],
        ["REACT", "TYPESCRIPT", "CHAKRA UI"],
        ["SPRING BOOT", "DOCKER", "POSTGRES"],
        ["JAVASCRIPT", "CYPRESS"],
        ["JAVA", "REST ASSURED"]
    ]
    return projectTag;
}

export function getProjectDescription() {
    const projectDescription: string[] = [
        "Esse projeto é o front-end que permite a utilização intuitiva da API de Votação, ele permite o cadastro de usuários e a criação e votação de pautas",
        "Essa é a API de Votação, ela foi feita em Java e Spring JPA/Postgres para armazenar os dados. Utiliza Docker para conteinerizar o banco e a mesma.",
        "Este projeto tem como intuito testar o front-end do projeto Votação Front-End usando Cypress.",
        "Este projeto tem como função testar a API de Votação usando RestAssured.",
        "Esse é o front-end do projeto Pessoa. Ele permite o cadastro e visualização de pessoas.",
        "Em conjunto com o Pessoa Front-End esse projeto permite a validação e armazenamento de pessoas.",
        "Este projeto tem como intuito testar o front-end do projeto Pessoa Front-End usando Cypress.",
        "Este projeto tem como função testar a API de Pessoa usando RestAssured."
    ]
    return projectDescription;
}

export function getProjectLink() {
    const projectLink: string[][] = [
        ["https://github.com/AurorinhaBoreal/VotacaoCRUD-FrontEnd", "https://votacao-front.onrender.com/"],
        ["https://github.com/AurorinhaBoreal/VotacaoCRUD-BackEnd"],
        ["https://github.com/AurorinhaBoreal/VotingCRUD-Cypress"],
        ["https://github.com/AurorinhaBoreal/VotingCRUD-RestAssured"],
        ["https://github.com/AurorinhaBoreal/PersonCRUD-FrontEnd"],
        ["https://github.com/AurorinhaBoreal/PersonCRUD-BackEnd"],
        ["https://github.com/AurorinhaBoreal/PersonCRUD-Cypress"],
        ["https://github.com/AurorinhaBoreal/PersonCRUD-RestAssured"],
    ]
    return projectLink;
}