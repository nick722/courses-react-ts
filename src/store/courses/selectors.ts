import { createSelector } from '@reduxjs/toolkit';

export const selectCourses = (state) => state.courses.data;

export const selectCourseById = (state, id) =>
	state.courses.data.find((course) => course.id === id);

export const selectCourseDeleteError = (state) => state.courses.error;
