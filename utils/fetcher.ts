export async function fetcherGet(path: string) {
  const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}`);
  const data = await req.json();
  return data;
}

export const fetcherPost = async (path: string, body: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

export const fetcherDelete = async (path: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
};

export async function fetcherPut(path: string, data: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
}

export const fetcherLogin = async (path: string, body: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data: any = await res.json();

  return data;
};
