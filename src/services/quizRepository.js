class MockQuizRepository {
  resolveTimerData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, native: "Word", value: "слово", isCheck: false },
          { id: 2, native: "Hello", value: "привіт", isCheck: false },
          { id: 3, native: "World", value: "Cвіт", isCheck: false },
          { id: 4, native: "Female", value: "Cім'я", isCheck: false },
          { id: 5, native: "Football", value: "футбол", isCheck: false },
          { id: 6, native: "See", value: "Бачу", isCheck: false },
          { id: 7, native: "Create", value: "Cтворити", isCheck: false },
          { id: 8, native: "Update", value: "oновити", isCheck: false },
          { id: 9, native: "Orange", value: "Апельсин", isCheck: false },
          { id: 10, native: "Programer", value: "Програміст", isCheck: false },
        ]);
      }, 2000);
    });
  }

  getElements = async () => {
    let result = await this.resolveTimerData();
    return result;
  };
}

export default MockQuizRepository;
