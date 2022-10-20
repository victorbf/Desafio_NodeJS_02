/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

type UbuntuUser = {
	name: string;
	age: number;
	isDev: boolean;
	height: number;
	weight: number;
}

const ubuntuUsers: UbuntuUser[] = [
	{
		name: "Elias Silva",
		age: 25,
		isDev: false,
		height: 1.5,
		weight: 73.4,
	},
	{
		name: "Caique Malone",
		age: 25,
		isDev: true,
		height: 1.65,
		weight: 88.5
	},
	{
		name: "Lucas Junior",
		age: 26,
		isDev: true,
		height: 1.8,
		weight: 68
	},
];

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

	// R01
	const sumAges = ubuntuUsers.reduce((acc, user) => user.age + acc, 0);
	console.log(`SOMAR A IDADE DE TODOS OS UBUNTUS: ${sumAges}`);

	// R02
	const getNames = ubuntuUsers.map((user) => user.name);
	console.log(`AGRUPAR O NOME DE TODOS OS UBUNTUS: ${getNames}`);

	// R03
	const getImcAverage = ubuntuUsers.reduce((acc, user) => acc + user.weight / user.height ** 2, 0) / ubuntuUsers.length;
	console.log(`CALCULAR MÉDIA IMC DE TODOS UBUNTOS: ${getImcAverage}`);

	// R04
	const getDevsLength = ubuntuUsers.filter((user) => user.isDev).length;
	console.log(`CONTAR QUANTOS UBUNTUS SÃO DEVS: ${getDevsLength}`);

	// R05
	const name = 'Silva';
	const getSilva = ubuntuUsers.filter((user) => user.name.includes(name)).map((user) => user.name);
	console.log(`EXIBIR SOMENTE UBUNTUS COM SOBRENOME SILVA: ${getSilva}`);
});
