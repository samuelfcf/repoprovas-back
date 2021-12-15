import app, { init } from './app';
import './setup';

init().then(() => {
  app.listen(process.env.PORT, () => {
    console.clear();
    console.log(`Env: ${process.env.NODE_ENV}`);
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
