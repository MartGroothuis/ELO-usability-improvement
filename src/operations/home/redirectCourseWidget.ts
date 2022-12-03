import { HomeRepository } from "~src/repository/homeRepository";

export function redirectCourseWidget() {
  HomeRepository.getInstance()
    .getCourses()
    .then((courses) => {
		for (let i = 0; i < courses.length; i++) {
			let course = courses[i].shadowRoot?.children[1];
			if (course == undefined) return;

			console.log(course.getAttribute("href"))

			// window.location.replace(`/d2l/le/content/${courseCode}/Home`);
		}
    })
    .finally(() => {
    });
  console.log("container getInstance");
}
