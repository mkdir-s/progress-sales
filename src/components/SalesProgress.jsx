import { useState } from "react";

const SalesProgress = ({ data }) => {
  const [tooltipData, setTooltipData] = useState(null);

  const handleDayClick = (dayData) => {
    setTooltipData(dayData);
  };

  const handleTotalPlanClick = () => {
    setTooltipData({
      name: "Total Week Plan",
      totalPlan: 12000000,
      earned: 8400000,
    });
  };

  const closeTooltip = () => {
    setTooltipData(null);
  };

  const formatNumber = (number) => {
    return number.toLocaleString('ru-RU');
  };

  return (
    <div className="relative p-[30px] bg-white shadow-md rounded-lg">
      {/* Стрелочка слева с бордером */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white border-2 border-black rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
          <path d="M7 0L5.59 1.41 9.17 5H0v2h9.17l-3.58 3.59L7 12l5-5-5-5z"/>
        </svg>
      </div>

      {/* Стрелочка справа с бордером */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white border-2 border-black rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
          <path d="M5 0L6.41 1.41 2.83 5H12v2H2.83l3.58 3.59L5 12 0 7l5-5z"/>
        </svg>
      </div>

      {/* Заголовок и прогресс-бары для всех магазинов */}
      <h2 className="text-xl font-semibold mb-4">Week sales plan for all stores</h2>
      <div className="mb-6">
        <div className="text-sm mb-1">Total plan: 12,000,000 тг</div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: "70%" }}
            onClick={handleTotalPlanClick} // Обработчик клика по общему плану
          ></div>
        </div>
      </div>

      {/* Дни недели для общего плана */}
      <div className="flex mt-4">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
          <button
            key={i}
            className={`w-10 h-10 rounded-full mx-1 ${
              ["Mon", "Tue", "Wed"].includes(day)
                ? "bg-red-500"
                : "bg-green-500"
            } text-white`}
            onClick={() => handleDayClick({ name: day })}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Прогресс-бары для каждого магазина */}
      {data.map((store, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-lg font-medium mb-2">{store.name}</h3>
          <div className="text-sm mb-1">Total plan: {formatNumber(store.totalPlan)} тг</div>
          <div className="w-full bg-gray-200 rounded-full h-4 relative">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${store.progress}%` }}
            ></div>
            <span
              className="absolute inset-0 flex items-center justify-center text-white font-semibold"
              style={{ width: `${store.progress}%` }}
            >
              {store.progress}%
            </span>
          </div>
        </div>
      ))}

      {tooltipData && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeTooltip} // Закрытие при клике вне тултипа
        >
          <div
            className="p-8 bg-white shadow-xl rounded-lg border mt-2 w-[300px] max-w-[500px]"
            onClick={(e) => e.stopPropagation()} // Остановка всплытия события для кликов внутри тултипа
          >
            <div className="flex justify-between items-center">
              <h4 className="text-2xl font-semibold">{tooltipData.name}</h4>
              <button onClick={closeTooltip} className="text-red-500 font-bold">
                ✕
              </button>
            </div>
            <div className="mt-4 text-lg">
              <p>Total plan: {formatNumber(tooltipData.totalPlan)} тг</p>
              <p>Earned: {formatNumber(tooltipData.earned)} тг</p>
              <p>Remaining: {formatNumber(tooltipData.totalPlan - tooltipData.earned)} тг</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesProgress;
