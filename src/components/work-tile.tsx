export default function WorkTile(props: {
  company: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}) {
  return (
    <li className="ms-4 mb-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {props.startDate}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {props.title}
      </h3>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400 max-w-4xl">
        {props.description}
      </p>
    </li>
  );
}
