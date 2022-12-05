import { HomeRepository } from "~src/repository/homeRepository";

export function redirectCourseWidget() {
	HomeRepository.getInstance()
		.getCourses()
		.then((courses) => {
			for (let i = 0; i < courses.length; i++) {
				// window.location.replace(`/d2l/le/content/${courseCode}/Home`);
				HomeRepository.getInstance().getCourseUrlFromCourse(courses[i]).then((url) => {
					const courseId = url.getAttribute("href")?.replace("/d2l/home/", "");
					url.setAttribute("href", `/d2l/le/content/${courseId}/Home`);
				})
			}
		})
	console.log("container getInstance");
}
