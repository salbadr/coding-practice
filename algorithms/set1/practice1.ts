/**
 * 
 * Prompt:
You receive this data from an API:
[
  { "id": 1, "name": "Alice", "group": "A", "score": 91 },
  { "id": 2, "name": "Bob",   "group": "B", "score": 85 },
  { "id": 3, "name": "Cara",  "group": "A", "score": 77 },
  { "id": 4, "name": "Dan",   "group": "B", "score": 93 }
]

Task:
Transform it into:
{
  A: {
    average: number,
    users: string[]
  },
  B: {
    average: number,
    users: string[]
  }
}

Focus:

grouping
reduce
clean TS types

 * 
 * 
 */


type ClassAverage = Record<string, {
  average: number;
  users: string[];
}>

interface StudentData {
  id: number;
  name: string;
  group: 'A' | 'B';
  score: number
}
const input: StudentData[] = [
  { "id": 1, "name": "Alice", "group": "A", "score": 91 },
  { "id": 2, "name": "Bob", "group": "B", "score": 85 },
  { "id": 3, "name": "Cara", "group": "A", "score": 77 },
  { "id": 4, "name": "Dan", "group": "B", "score": 93 }
]

function calculateAverage(studentData: StudentData[]) {
  const result:ClassAverage = {};
  studentData.forEach((student)=>{
    const group = student.group;
    if(!result[group]){
      result[group]= calculateMetrics(group);
    }

  })
  
  return result;

  function calculateMetrics(group: 'A' | 'B') {
    const metrics = studentData.reduce((metrics: { sum: number, total: number, users: string[] }, student: StudentData) => {
      if (student.group === group) {
        metrics.sum += student.score;
        metrics.total++;
        metrics.users.push(student.name)
      }
      return metrics;
    }, {
      sum: 0,
      total: 0,
      users: []
    });

    return { average: Number((metrics.sum / metrics.total).toFixed(2)), users: metrics.users }
  }

}

console.log(calculateAverage(input));

/***
 * 
 * type ClassAverage = Record<string, {
  average: number;
  users: string[];
}>;

interface StudentData {
  id: number;
  name: string;
  group: 'A' | 'B';
  score: number;
}

function calculateAverage(studentData: StudentData[]): ClassAverage {
  const groups = studentData.reduce((acc, student) => {
    if (!acc[student.group]) {
      acc[student.group] = { sum: 0, total: 0, users: [] };
    }

    acc[student.group].sum += student.score;
    acc[student.group].total += 1;
    acc[student.group].users.push(student.name);

    return acc;
  }, {} as Record<string, { sum: number; total: number; users: string[] }>);

  const result: ClassAverage = {};

  for (const group in groups) {
    const { sum, total, users } = groups[group];
    result[group] = {
      average: Number((sum / total).toFixed(2)),
      users
    };
  }

  return result;
}

 * 
 */