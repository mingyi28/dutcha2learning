import { Word } from '../types';

// 课程数据接口定义
export interface Course {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  words: Word[];
}

export interface Thema {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  courses: Course[];
}

// 导入各个 Thema 的数据
import { thema1 } from './courses_thema1';
import { thema2 } from './courses_thema2';
import { thema3 } from './courses_thema3';
import { thema4 } from './courses_thema4';
import { thema5 } from './courses_thema5';
import { thema6 } from './courses_thema6';
import { thema7 } from './courses_thema7';
import { thema8 } from './courses_thema8';

// 所有主题数据
const allThemas: Thema[] = [
  thema1,
  thema2,
  thema3,
  thema4,
  thema5,
  thema6,
  thema7,
  thema8,
];

// 获取所有主题
export function getThemas(): Thema[] {
  return allThemas;
}

// 根据ID获取主题
export function getThemaById(id: string): Thema | undefined {
  return allThemas.find(t => t.id === id);
}

// 根据ID获取课程
export function getCourseById(id: string): Course | undefined {
  for (const thema of allThemas) {
    const course = thema.courses.find(c => c.id === id);
    if (course) return course;
  }
  return undefined;
}

// 根据课程ID获取所属主题
export function getThemaByCourseId(courseId: string): Thema | undefined {
  return allThemas.find(thema => thema.courses.some(c => c.id === courseId));
}

// 获取所有课程的单词总数
export function getTotalWordsCount(): number {
  return allThemas.reduce((total, thema) => {
    return total + thema.courses.reduce((sum, course) => sum + course.words.length, 0);
  }, 0);
}

// 获取所有课程中的所有单词
export function getAllCourseWords(): Word[] {
  const words: Word[] = [];
  for (const thema of allThemas) {
    for (const course of thema.courses) {
      words.push(...course.words);
    }
  }
  return words;
}