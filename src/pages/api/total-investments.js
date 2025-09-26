import connectToDatabase from '@/libs/mongodb';
import Membership from '@/models/Membership';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectToDatabase();

    const result = await Membership.aggregate([
      {
        $match: {
          paymentStatus: 'succeeded'
        }
      },
      {
        $group: {
          _id: null,
          totalInvestments: { $sum: '$investedAmount' }
        }
      }
    ]);

    const actualInvestments = result[0]?.totalInvestments || 0;
    
    // Add 9% of the goal amount ($31M) as base amount
    const goalAmount = 31000000; // $31M goal
    const baseAmount = goalAmount * 0.09; // 9% of goal = $2,790,000
    
    const totalInvestments = actualInvestments + baseAmount;

    res.status(200).json(totalInvestments);

  } catch (error) {
    console.error('Error calculating total investments:', error);
    // Return base amount even on error
    const goalAmount = 31000000;
    const baseAmount = goalAmount * 0.09;
    res.status(500).json(baseAmount);
  }
}