 export const findDate = (dateString: string) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return (formattedDate);
    }
    
 export  interface RootObject  {
  title: string;
  slug: string;
  publishedAt: string;
  tags: Tags;
  body: Body[];
  imageUrl: string;
  author: Author;
}

export interface Author {
  name: string;
  img: string;
  bio?: string;
}

export interface Body {
  markDefs: any[];
  children: Child[];
  _type: string;
  style: string;
  _key: string;
}

export interface Child {
  _type: string;
  marks: any[];
  text: string;
  _key: string;
}

 export interface Tags {
  title: string;
}