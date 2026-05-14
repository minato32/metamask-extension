import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'clsx';
import {
  Box,
  BoxAlignItems,
  BoxBackgroundColor,
  BoxFlexDirection,
  BoxJustifyContent,
} from '@metamask/design-system-react';
import { IconColor } from '../../../helpers/constants/design-system';
import { Icon, IconName, IconSize } from '../../component-library';

export const ConnectedSiteMenu = ({ className, disabled, onClick }) => {
  return (
    <Box
      asChild
      flexDirection={BoxFlexDirection.Row}
      alignItems={BoxAlignItems.Center}
      justifyContent={BoxJustifyContent.Center}
      backgroundColor={BoxBackgroundColor.BackgroundDefault}
    >
      <button
        type="button"
        className={classNames(
          `multichain-connected-site-menu rounded-lg${disabled ? '--disabled' : ''}`,
          className,
        )}
        data-testid="connection-menu"
        onClick={onClick}
      >
        <Icon
          name={IconName.Global}
          size={IconSize.Lg}
          color={IconColor.iconDefault}
        />
      </button>
    </Box>
  );
};

ConnectedSiteMenu.propTypes = {
  /**
   * Additional classNames to be added to the ConnectedSiteMenu
   */
  className: PropTypes.string,
  /**
   * onClick handler to be passed
   */
  onClick: PropTypes.func,
  /**
   *  Disable the connected site menu if the account is non-evm
   */
  disabled: PropTypes.bool,
};
