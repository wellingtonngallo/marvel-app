import Skeleton, {SkeletonTheme} from "react-loading-skeleton";


export const Loading = (): JSX.Element => {
  return (
    <SkeletonTheme color="#dbdbdb" highlightColor="#bfbfbf">
      <div className="skeleton-container">
        <header>
          <Skeleton height={200}/>
        </header>
        <section className="skeleton-title">
          <Skeleton height={100} width={300} />
        </section>
      </div>
    </SkeletonTheme>
  )
}