// app/admin/dashboard/Dashboard.tsx
'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement,
  ArcElement,
} from 'chart.js';
import Link from 'next/link';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import useSWR from 'swr';

import { formatNumber } from '@/lib/utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement,
  ArcElement,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const Dashboard = () => {
  const { data: summary, error } = useSWR(`/api/admin/summary`);

  console.log(summary);

  if (error) return error.message;
  if (!summary) return '載入中...';

  const salesData = {
    labels: summary.salesData.map((x: { _id: string }) => x._id),
    datasets: [
      {
        fill: true,
        label: '銷售額',
        data: summary.salesData.map(
          (x: { totalSales: number }) => x.totalSales,
        ),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const ordersData = {
    labels: summary.salesData.map((x: { _id: string }) => x._id),
    datasets: [
      {
        fill: true,
        label: '訂單',
        data: summary.salesData.map(
          (x: { totalOrders: number }) => x.totalOrders,
        ),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const productsData = {
    labels: summary.productsData.map((x: { _id: string }) => x._id),
    datasets: [
      {
        label: '類別',
        data: summary.productsData.map(
          (x: { totalProducts: number }) => x.totalProducts,
        ),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  };
  const usersData = {
    labels: summary.usersData.map((x: { _id: string }) => x._id),
    datasets: [
      {
        label: '用戶',
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(75, 136, 177, 0.5)',
        data: summary.usersData.map(
          (x: { totalUsers: number }) => x.totalUsers,
        ),
      },
    ],
  };

  return (
    <div>
      <div className='stats stats-vertical my-4 inline-grid shadow md:stats-horizontal md:flex'>
        <div className='stat'>
          <div className='stat-title'>銷售額</div>
          <div className='stat-value text-primary'>
            ${formatNumber(summary.ordersPrice)}
          </div>
          <div className='stat-desc'>
            <Link href='/admin/orders'>查看銷售</Link>
          </div>
        </div>
        <div className='stat'>
          <div className='stat-title'>訂單</div>
          <div className='stat-value text-primary'>{summary.ordersCount}</div>
          <div className='stat-desc'>
            <Link href='/admin/orders'>查看訂單</Link>
          </div>
        </div>
        <div className='stat'>
          <div className='stat-title'>商品</div>
          <div className='stat-value text-primary'>{summary.productsCount}</div>
          <div className='stat-desc'>
            <Link href='/admin/products'>查看商品</Link>
          </div>
        </div>
        <div className='stat'>
          <div className='stat-title'>用戶</div>
          <div className='stat-value text-primary'>{summary.usersCount}</div>
          <div className='stat-desc'>
            <Link href='/admin/users'>查看用戶</Link>
          </div>
        </div>
        <div className='stat'> 
          <div className='stat-title'>付款方式</div>
          <div className='stat-value text-primary'>{summary.paymentMethodsCount}</div>
          <div className='stat-desc'>
            <Link href='/admin/payment-methods'>管理付款方式</Link>
          </div>
        </div>
      </div>
      <div className='grid gap-4 md:grid-cols-2'>
        <div>
          <h2 className='py-2 text-xl'>銷售報告</h2>
          <Line data={salesData} />
        </div>
        <div>
          <h2 className='py-2 text-xl'>訂單報告</h2>
          <Line data={ordersData} />
        </div>
      </div>
      <div className='grid gap-4 md:grid-cols-2'>
        <div>
          <h2 className='py-2 text-xl'>商品報告</h2>
          <div className='flex h-80 w-96 items-center justify-center '>
            <Doughnut data={productsData} />
          </div>
        </div>
        <div>
          <h2 className='py-2 text-xl'>用戶報告</h2>
          <Bar data={usersData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;