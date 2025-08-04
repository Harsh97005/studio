
import type { Subject, Note, Course } from './types';
import { Calendar, Clipboard, BookOpen, GraduationCap, Code, PenTool, Briefcase, Building } from 'lucide-react';

export const courses: Course[] = [
  { id: 'btech', name: 'B.Tech', icon: Code, description: 'Bachelor of Technology' },
  { id: 'bca', name: 'BCA', icon: Code, description: 'Bachelor of Computer Applications' },
  { id: 'bdes', name: 'B.Des', icon: PenTool, description: 'Bachelor of Design' },
  { id: 'mca', name: 'MCA', icon: Code, description: 'Master of Computer Applications' },
  { id: 'bcom', name: 'B.Com', icon: Briefcase, description: 'Bachelor of Commerce' },
  { id: 'bba', name: 'BBA', icon: Building, description: 'Bachelor of Business Administration' },
  { id: 'mba', name: 'MBA', icon: Building, description: 'Master of Business Administration' },
  { id: 'diploma', name: 'Diploma', icon: GraduationCap, description: 'Diploma Courses' },
];

export const subjects: Subject[] = [
  { id: 'cs101', name: 'Intro to CS', icon: Calendar, courseId: 'btech' },
  { id: 'ma101', name: 'Calculus', icon: Clipboard, courseId: 'btech' },
  { id: 'phy101', name: 'Physics', icon: BookOpen, courseId: 'btech' },
  { id: 'ee101', name: 'Electrical Eng.', icon: GraduationCap, courseId: 'btech' },
];

export const notes: Note[] = [
  {
    id: '1',
    title: 'Introduction to Calculus',
    subjectId: 'ma101',
    createdAt: '2023-10-01',
    content: `
# Introduction to Calculus

Calculus is a branch of mathematics that deals with rates of change and accumulation. It has two major branches, differential calculus and integral calculus.

## Differential Calculus

Differential calculus is concerned with the study of the rates at which quantities change. The primary object of study in differential calculus is the derivative.

### Key Concepts:
- **Limits**: The value that a function or sequence "approaches" as the input or index approaches some value.
- **Derivatives**: A measure of how a function changes as its input changes. The derivative of a function at a chosen input value, when it exists, is the slope of the tangent line to the graph of the function at that point.
- **Chain Rule**: A formula to compute the derivative of a composite function.

## Integral Calculus

Integral calculus is the study of the definitions, properties, and applications of two related concepts, the indefinite integral and the definite integral.

### Key Concepts:
- **Integrals**: An integral assigns numbers to functions in a way that can describe displacement, area, volume, and other concepts that arise by combining infinitesimal data.
- **Fundamental Theorem of Calculus**: A theorem that links the concept of differentiating a function with the concept of integrating a function.
`,
  },
  {
    id: '2',
    title: 'Newtonian Mechanics',
    subjectId: 'phy101',
    createdAt: '2023-10-05',
    content: `
# Newtonian Mechanics

Newtonian mechanics is the study of the motion of objects and the forces that cause them to move. It is based on Newton's laws of motion.

## Newton's Laws of Motion

1.  **First Law (Inertia)**: An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.
2.  **Second Law (F=ma)**: The acceleration of an object is dependent upon two variables - the net force acting upon the object and the mass of the object.
3.  **Third Law (Action-Reaction)**: For every action, there is an equal and opposite reaction.

## Key Concepts

- **Force**: A push or pull upon an object resulting from the object's interaction with another object.
- **Mass**: A measure of the amount of matter in an object.
- **Acceleration**: The rate of change of velocity of an object with respect to time.
`,
  },
  {
    id: '4',
    title: 'Data Structures in Python',
    subjectId: 'cs101',
    createdAt: '2023-10-10',
    content: `
# Data Structures in Python

Data structures are a way of organizing and storing data so that they can be accessed and worked with efficiently.

## Common Data Structures

- **Lists**: Ordered, mutable collections of items. \`my_list = [1, 2, 3]\`
- **Tuples**: Ordered, immutable collections of items. \`my_tuple = (1, 2, 3)\`
- **Dictionaries**: Unordered collections of key-value pairs. \`my_dict = {
  'key': 'value'
}\`
- **Sets**: Unordered collections of unique items. \`my_set = {1, 2, 3}\`

## Algorithms

An algorithm is a set of instructions for solving a problem or accomplishing a task.
- **Sorting**: *Bubble Sort*, *Merge Sort*, *Quick Sort*
- **Searching**: *Linear Search*, *Binary Search*
`,
  },
  {
    id: '6',
    title: 'Fundamentals of Algorithm Design',
    subjectId: 'cs101',
    createdAt: '2023-11-05',
    content: `
# Fundamentals of Algorithm Design

Algorithm design refers to a method or a mathematical process for problem-solving and engineering algorithms. The design of algorithms is part of many solution theories of operation research, such as dynamic programming and divide-and-conquer.

## Common Paradigms

*   **Brute-force or exhaustive search**: Tries all possible solutions to see which is best.
*   **Divide and conquer**: Recursively breaks down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly.
*   **Dynamic programming**: When a problem shows optimal substructure and overlapping subproblems, meaning the optimal solution to a problem can be constructed from optimal solutions to subproblems, and these subproblems are reused multiple times.
*   **Greedy algorithm**: Follows the problem-solving heuristic of making the locally optimal choice at each stage.
`,
  },
];
