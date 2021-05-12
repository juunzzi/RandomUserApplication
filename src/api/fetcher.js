export const fetcher = async (...args) => {
  // 인자들이 배열로 온다.
  const res = await fetch(...args);
  if (!res.ok) {
    const error = new Error("에러 발생 shitttt..");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  const data = await res.json();
  return data.results;

  //   return fetch(...args)
  //     .then((res) => res.json())
  //     .then((data) => data.results);
};
