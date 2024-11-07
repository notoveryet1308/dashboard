import { useState } from "react";
import { Plus } from "phosphor-react";

import { StyledWidgetListingWrapper } from "./style";
import Head from "./Head";
import WidgetThumbnails from "./WidgetThumbnails";

function WidgetListing() {
  const [isExpanded, setIsExpanded] = useState(false);
  const onListingExpand = () => setIsExpanded(true);
  const onListingCollapse = () => setIsExpanded(false);

  return (
    <StyledWidgetListingWrapper $isExpanded={isExpanded}>
      {!isExpanded && (
        <div className="widget-listing-trigger" onClick={onListingExpand}>
          <Plus size={20} />
        </div>
      )}
      <div className="widget-listing-container">
        <Head onListingCollapse={onListingCollapse} />
        <WidgetThumbnails />
      </div>
    </StyledWidgetListingWrapper>
  );
}

export default WidgetListing;
