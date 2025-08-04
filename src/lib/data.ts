
import type { Subject, Note } from './types';
import { Calculator, FlaskConical, ScrollText, Code, Globe, PenTool } from 'lucide-react';

export const subjects: Subject[] = [
  { id: 'math', name: 'Mathematics', icon: Calculator },
  { id: 'physics', name: 'Physics', icon: FlaskConical },
  { id: 'history', name: 'History', icon: ScrollText },
  { id: 'cs', name: 'Computer Science', icon: Code },
  { id: 'geo', name: 'Geography', icon: Globe },
  { id: 'lit', name: 'Literature', icon: PenTool },
];

export const notes: Note[] = [
  {
    id: '1',
    title: 'Introduction to Calculus',
    subjectId: 'math',
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
    subjectId: 'physics',
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
    id: '3',
    title: 'The Roman Empire',
    subjectId: 'history',
    createdAt: '2023-09-20',
    content: `
# The Roman Empire

The Roman Empire was the post-Republican period of ancient Rome. It included territory around the Mediterranean Sea in Europe, North Africa, and Western Asia, and was ruled by emperors.

## Periods

- **Principate (27 BC – 284 AD)**: The first period of the Roman Empire, it was characterized by the reign of a single emperor (princeps) and a concerted effort to preserve the illusion of the formal continuance of the Roman Republic.
- **Dominate (284 AD – 476 AD)**: The later period of the Roman Empire, it was characterized by a more autocratic style of rule.

## Decline and Fall

The fall of the Western Roman Empire was the process of decline in the Western Roman Empire in which the Empire failed to enforce its rule, and its vast territory was divided into several successor polities. The traditional date for the end of the Western Roman Empire is 476 AD when the last Western Roman Emperor, Romulus Augustulus, was deposed.
`,
  },
  {
    id: '4',
    title: 'Data Structures in Python',
    subjectId: 'cs',
    createdAt: '2023-10-10',
    content: `
# Data Structures in Python

Data structures are a way of organizing and storing data so that they can be accessed and worked with efficiently.

## Common Data Structures

- **Lists**: Ordered, mutable collections of items. \`my_list = [1, 2, 3]\`
- **Tuples**: Ordered, immutable collections of items. \`my_tuple = (1, 2, 3)\`
- **Dictionaries**: Unordered collections of key-value pairs. \`my_dict = {'key': 'value'}\`
- **Sets**: Unordered collections of unique items. \`my_set = {1, 2, 3}\`

## Algorithms

An algorithm is a set of instructions for solving a problem or accomplishing a task.
- **Sorting**: *Bubble Sort*, *Merge Sort*, *Quick Sort*
- **Searching**: *Linear Search*, *Binary Search*
`,
  },
  {
    id: '5',
    title: 'World War II: An Overview',
    subjectId: 'history',
    createdAt: '2023-11-01',
    content: `
# World War II: An Overview

World War II was a global war that lasted from 1939 to 1945. It involved the vast majority of the world's countries—including all the great powers—forming two opposing military alliances: the Allies and the Axis.

## Key Events

- **Invasion of Poland (1939)**: Germany invades Poland, leading to declarations of war from France and the United Kingdom.
- **Fall of France (1940)**: Germany invades France, Belgium, Luxembourg and the Netherlands.
- **Battle of Britain (1940)**: The Royal Air Force (RAF) defends the United Kingdom against large-scale attacks by the German Air Force (Luftwaffe).
- **Attack on Pearl Harbor (1941)**: The Imperial Japanese Navy Air Service conducts a surprise military strike against the United States naval base at Pearl Harbor, Hawaii.
- **D-Day: Normandy Landings (1944)**: The Allied invasion of Normandy in Operation Overlord during World War II.
- **Battle of the Bulge (1944–1945)**: The last major German offensive campaign on the Western Front.
- **Victory in Europe Day (1945)**: The formal acceptance by the Allies of Nazi Germany's unconditional surrender of its armed forces.
`,
  },
  {
    id: '6',
    title: 'Fundamentals of Algorithm Design',
    subjectId: 'cs',
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
