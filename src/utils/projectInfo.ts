import votacaoFront from "../assets/projects/votacaoFront.jpg";
import votacaoBack from "../assets/projects/votacaoBack.jpg";

export function getProjectImage() {
    const projectImages: string[] = [
        votacaoFront, 
        votacaoBack
    ]
    return projectImages;
}

export function getProjectTitle() {
    const projectTitles: string[] = [
        "Votação Front-End",
        "Votação Back-End"
    ]
    return projectTitles;
}

export function getProjectTag() {
    const projectTag: string[][] = [
        ["REACT", "TYPESCRIPT", "CHAKRA UI"],
        ["SPRING BOOT", "DOCKER", "POSTGRES"]
    ]
    return projectTag;
}

export function getProjectDescription() {
    const projectDescription: string[] = [
        "Esse projeto é o front-end que permite a utilização intuitiva da API de Votação, ele permite o cadastro de usuários e a criação e votação de pautas",
        "Essa é a API de Votação, ela foi feita em Java e Spring JPA/Postgres para armazenar os dados. Utiliza Docker para conteinerizar o banco e a mesma."
    ]
    return projectDescription;
}

export function getProjectLink() {
    const projectLink: string[][] = [
        ["https://github.com/AurorinhaBoreal/VotacaoCRUD-FrontEnd", "https://votacao-front.onrender.com/"],
        ["https://github.com/AurorinhaBoreal/VotacaoCRUD-BackEnd"]
    ]
    return projectLink;
}