import create from 'zustand';

export const useStore = create((set, get) => ({
    classes: [],
    addClass: (newClass) => {
        const classes = get().classes;
        for (var class_ of classes) {
            if (class_.courseData.courseID == newClass.courseData.courseID) return;
        }

        set(state => ({
            classes: [...state.classes, newClass]
        }));
    },
    deleteClass: (id) => {
        set(state => ({
            classes: state.classes.filter(addedClass => addedClass.courseData.courseID != id)
        }));
    },
    updateLecture: (courseId, lectureId) => {
        const classes = get().classes;
        const course = classes.filter(addedClass => addedClass.courseData.courseID == courseId)[0];
        console.log(course);

        course.lecture = lectureId;
        set(state => ({
            classes: classes
        }));
    }
}))