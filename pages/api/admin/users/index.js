import { getToken } from 'next-auth/jwt';
import User from '../../../../models/User';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const user = await getToken({ req, secret: process.env.SECRET });
  if (!user || (user && !user.isAdmin)) {
    return res.status(401).send('Admin signin required');
  }
  await db.connect();
  const users = await User.find({});
  await db.disconnect();
  res.send(users);
};

export default handler;
