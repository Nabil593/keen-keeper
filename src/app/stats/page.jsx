"use client";
import { useInteractions } from "@/Context/InteractionContext";
import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const StatsPage = () => {
    const { interactions } = useInteractions();

    const totalCalls = interactions.filter(i => i.action === "call").length;
    const totalTexts = interactions.filter(i => i.action === "text").length;
    const totalVideos = interactions.filter(i => i.action === "video").length;

    const chartData = [
        { name: 'Calls', value: totalCalls, fill: '#0088FE' },
        { name: 'Texts', value: totalTexts, fill: '#00C49F' },
        { name: 'Videos', value: totalVideos, fill: '#FFBB28' },
    ];

    return (
        <div className="max-w-[1200px] mx-auto w-full mb-30 lg:px-12 md:px-6 px-4 my-20 space-y-10">
            <p className="text-4xl font-bold ">Friendship Analytics</p>

            <div className="bg-white shadow-sm p-8 rounded-md">
                <p className="text-[20px] font-medium text-[#244D3F]">By Interaction Type</p>

                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart className="outline-none" activeShape={{ stroke: 'none', outline: 'none' }}>
                            <Tooltip
                                contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}
                            />
                            <Pie
                                data={chartData}
                                innerRadius="60%"
                                outerRadius="80%"
                                paddingAngle={5}
                                cornerRadius={8}
                                dataKey="value"
                                activeShape={{ stroke: 'none', outline: 'none' }}
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={index} fill={entry.fill} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <div className="flex gap-2 items-center ">
                        <div className="w-4 h-4 bg-[#0088FE]"></div> <p>Calls</p>
                    </div>

                    <div className="flex gap-2 items-center ">
                        <div className="w-4 h-4 bg-[#00C49F]"></div> <p>Texts</p>
                    </div>

                    <div className="flex gap-2 items-center ">
                        <div className="w-4 h-4 bg-[#FFBB28]"></div> <p>Videos</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;