import { getConnectionManager } from 'typeorm';

if (
  process.env.NODE_ENV === 'prod' &&
  process.env.DATABASE_URL.indexOf('sslmode=require') === -1
) {
  process.env.DATABASE_URL += '?sslmode=require';
}

const connect = async () => {
  const connectionManager = await getConnectionManager();
  const connection = connectionManager.create({
    name: 'default',
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [
      `${process.env.NODE_ENV === 'prod' ? 'dist' : 'src'}/entities/*.${
        process.env.NODE_ENV === 'prod' ? 'js' : 'ts'
      }`
    ],
    ssl: process.env.NODE_ENV === 'prod',
    logging: true
  });
  await connection.connect();
  return connection;
};

export default connect;
