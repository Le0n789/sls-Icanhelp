import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export function PlaceholderTool({ title }: { title: string }) {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-gray-50/50 font-sans text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-30 flex h-16 w-full items-center border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 rounded-lg py-2 pl-2 pr-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          返回工具站
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="text-center max-w-md rounded-2xl border border-dashed border-gray-300 bg-white p-12 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-500">
            该功能模块正在开发建设中，敬请期待。
          </p>
        </div>
      </main>
    </div>
  );
}
