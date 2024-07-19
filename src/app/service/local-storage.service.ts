// Step 1: Import Angular modules and services
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // Step 2: Create a service to handle localStorage operations

  // Function to save an array of numbers to localStorage
  saveNumbers(numbers: number[]): void {
    try {
      const serializedNumbers = JSON.stringify(numbers);
      localStorage.setItem('numbers', serializedNumbers);
    } catch (error) {
      console.error('Error saving numbers to localStorage:', error);
    }
  }

  // Function to retrieve the array of numbers from localStorage
  getNumbers(): number[] {
    try {
      const serializedNumbers = localStorage.getItem('numbers');
      if (serializedNumbers) {
        return JSON.parse(serializedNumbers);
      }
      return [];
    } catch (error) {
      console.error('Error retrieving numbers from localStorage:', error);
      return [];
    }
  }
}
