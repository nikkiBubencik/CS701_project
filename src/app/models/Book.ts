export class Book {
    title!: string;
    description!: string | { type: string; value: string };
    covers!: number[];
    authors!: { author: { key: string } }[];
    links!: { title: string; url: string; type?: { key: string } }[];
    subject_places!: string[];
    subject_times!: string[];
    subjects!: string[];
    created!: { type: string; value: string };
    last_modified!: { type: string; value: string };
    latest_revision!: number;
    revision!: number;
    key!: string;
    type!: { key: string };
}
  