import { CaretCircleDoubleLeft } from "phosphor-react";

const Head = ({ onListingCollapse }: { onListingCollapse: () => void }) => (
  <div className="widget-listing-header">
    <CaretCircleDoubleLeft
      size={30}
      className="widget-listing-collapse-btn"
      onClick={onListingCollapse}
      weight="fill"
    />
    <span className="widget-listing-title">Widgets</span>
  </div>
);

export default Head;
