import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "AWS", level: 75 },
  { name: "TypeScript", level: 70 },
];

export function Skills() {
  return (
    <Card className="shadow-lg rounded-lg border border-gray-200">
      <CardContent className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Skills</h2>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium text-gray-700">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-gray-500">
                  {skill.level}%
                </span>
              </div>
              <Progress
                value={skill.level}
                className="h-3 rounded-full bg-gray-200"
                barClassName="bg-blue-500"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
