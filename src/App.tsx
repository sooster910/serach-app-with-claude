import { useCounterStore } from "@/store/useCounterStore";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function App() {
  const { count, increment, decrement, reset } = useCounterStore();
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800">
              Vite + React + Zustand + shadcn/ui
            </CardTitle>
            <CardDescription className="text-gray-600">
              모든 기술이 정상적으로 작동하는지 확인해보세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Zustand 상태 관리 테스트 */}
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Zustand 카운터
              </h3>
              <div className="text-4xl font-bold text-blue-600">{count}</div>
              <div className="flex gap-2 justify-center">
                <Button onClick={decrement} variant="outline" size="sm">
                  감소
                </Button>
                <Button onClick={reset} variant="secondary" size="sm">
                  리셋
                </Button>
                <Button onClick={increment} size="sm">
                  증가
                </Button>
              </div>
            </div>

            {/* shadcn/ui Input 컴포넌트 테스트 */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Input 컴포넌트
              </h3>
              <Input
                placeholder="여기에 텍스트를 입력하세요..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              {inputValue && (
                <p className="text-sm text-gray-600">
                  입력된 값: <span className="font-medium">{inputValue}</span>
                </p>
              )}
            </div>

            {/* 기술 스택 표시 */}
            <div className="pt-4 border-t">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                사용된 기술
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Vite
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  React
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Zustand
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  shadcn/ui
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
