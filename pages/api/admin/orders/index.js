import { getToken } from 'next-auth/jwt';
import Order from '../../../../models/Order';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  const user = await getToken({ req, secret: process.env.SECRET });
  if (!user) {
    return res.status(401).send('Admin signin required');
  }
  if (req.method === 'GET') {
    await db.connect();
    const orders = await Order.find({}).populate('user', 'name');
    await db.disconnect();
    res.send(orders);
  } else {
    return res.status(400).send({ message: 'Method not allowed' });
  }
};

export default handler;