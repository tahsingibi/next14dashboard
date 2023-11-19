import React, { Suspense } from 'react'
import { lusitana } from '../ui/fonts'
import CardWrapper from '../ui/dashboard/cards'
import RevenueChart from '../ui/dashboard/revenue-chart'
import LatestInvoices from '../ui/dashboard/latest-invoices'
import {
    RevenueChartSkeleton,
    LatestInvoicesSkeleton,
    CardsSkeleton,
} from '@/app/ui/skeletons';

import { fetchCardData } from '@/app/lib/data';


export default async function DashboardPage() {




    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <RevenueChart />
                <LatestInvoices />
            </div>
        </main>
    )
}
