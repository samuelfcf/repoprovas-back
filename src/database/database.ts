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
    url: 'postgres://postgres:123456@localhost:5432/repoprovas',
    entities: ['src/entities/*.ts']
  });
  await connection.connect();
  return connection;
};

export default connect;
