import { getPortProjects } from "./api";

const projects = await getPortProjects("guilhermegodoydev", "port-project");

console.log(projects);