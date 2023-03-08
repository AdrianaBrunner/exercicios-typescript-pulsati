import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { Aeroporto } from '../model/aeroporto';
import { EmpresaAerea } from '../model/empresaAerea';

const AppDataSource = new DataSource({
  type: 'oracle',
  host: '192.168.0.50',
  port: 1521,
  username: 'system',
  password: 'pulsati2023',
  database: 'xe',
  entities: [Aeroporto, EmpresaAerea],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});

export default AppDataSource;
