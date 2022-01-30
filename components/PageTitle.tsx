interface PageTitleProps {
  pageTitle: string
  pageTitleColor: string
}

export const PageTitle: React.FC<PageTitleProps> = ({
  pageTitle,
  pageTitleColor,
}: PageTitleProps) => (
  <div className={`${pageTitleColor} pagetitle `}>
    <h1 className="text-2xl font-extrabold tracking-wider text-center">
      {pageTitle}
    </h1>
  </div>
)
