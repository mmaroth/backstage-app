import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 190,
  },
  whitePath: {
    fill: '#ffffff',
    stroke: 'none',
  },
  bluePath: {
    fill: '#00568c',
    stroke: 'none',
  },
  cyanPath: {
    fill: '#00adee',
    stroke: 'none',
  },
});

export const LogoBig = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2079.95 850.05"
    >
    <g><path className={classes.cyanPath} d="M 923.5,136.5 C 928.809,135.565 932.309,137.565 934,142.5C 947.791,206.068 948.457,269.735 936,333.5C 923.041,396.634 891.874,448.468 842.5,489C 832.527,492.024 828.694,488.524 831,478.5C 881.237,437.163 911.904,384.163 923,319.5C 929.867,281.3 931.201,242.966 927,204.5C 849.896,286.335 757.063,343.169 648.5,375C 560.306,401.762 470.306,412.428 378.5,407C 374.251,402.199 374.584,397.866 379.5,394C 493.995,398.085 604.329,378.751 710.5,336C 794.01,301.471 865.51,250.305 925,182.5C 924.752,176.101 923.752,169.768 922,163.5C 879.994,213.56 830.16,253.726 772.5,284C 654.362,345.618 528.696,374.618 395.5,371C 379.341,370.192 363.674,367.026 348.5,361.5C 354.504,394.851 367.67,425.184 388,452.5C 394,459.833 400.667,466.5 408,472.5C 410.323,482.507 406.489,486.007 396.5,483C 371.585,461.039 353.751,434.206 343,402.5C 336.28,383.953 331.28,364.953 328,345.5C 324.768,332.813 328.601,322.98 339.5,316C 350.829,310.223 362.829,307.89 375.5,309C 380.313,313.041 380.646,317.375 376.5,322C 366.116,323.176 356.116,325.843 346.5,330C 340.55,336.251 341.55,341.251 349.5,345C 365.81,351.729 382.81,355.396 400.5,356C 530.3,358.299 652.633,329.299 767.5,269C 829.235,236.299 881.235,192.132 923.5,136.5 Z"/></g>
    <g><path className={classes.cyanPath} d="M 659.5,164.5 C 714.308,178.702 768.974,193.536 823.5,209C 826.394,211.909 827.227,215.409 826,219.5C 823.588,222.792 820.421,223.959 816.5,223C 767.741,209.802 719.075,196.302 670.5,182.5C 669.668,192.483 669.168,202.483 669,212.5C 663.851,217.996 659.184,217.663 655,211.5C 654.333,197.5 654.333,183.5 655,169.5C 656.025,167.313 657.525,165.646 659.5,164.5 Z"/></g>
    <g><path className={classes.bluePath} d="M 568.5,192.5 C 585.66,194.231 602.66,197.065 619.5,201C 635.167,211.333 650.833,221.667 666.5,232C 667.126,232.75 667.626,233.584 668,234.5C 668.667,257.167 668.667,279.833 668,302.5C 663.829,308.729 659.163,309.062 654,303.5C 653.833,282.825 653.333,262.159 652.5,241.5C 642.742,235.539 633.242,229.205 624,222.5C 623.667,253.833 623.333,285.167 623,316.5C 618.333,321.833 613.667,321.833 609,316.5C 608.5,282.502 608.333,248.502 608.5,214.5C 599.213,212.576 589.88,210.909 580.5,209.5C 580.667,248.168 580.5,286.835 580,325.5C 575.829,331.729 571.163,332.062 566,326.5C 565.667,288.833 565.333,251.167 565,213.5C 558.639,218.097 551.805,221.763 544.5,224.5C 537.956,223.089 535.789,219.089 538,212.5C 538.833,211.667 539.667,210.833 540.5,210C 550.066,204.392 559.399,198.559 568.5,192.5 Z"/></g>
    <g><path className={classes.cyanPath} d="M 490.5,212.5 C 504.026,214.715 517.36,217.881 530.5,222C 533.102,222.935 534.602,224.768 535,227.5C 535.667,263.167 535.667,298.833 535,334.5C 532.567,340.448 528.4,341.948 522.5,339C 521.107,337.829 520.273,336.329 520,334.5C 519.5,301.168 519.333,267.835 519.5,234.5C 512.102,232.981 504.769,231.481 497.5,230C 492.207,238.751 487.041,247.585 482,256.5C 481.667,285.833 481.333,315.167 481,344.5C 478.612,349.226 474.778,350.726 469.5,349C 468.667,348.167 467.833,347.333 467,346.5C 466.333,314.833 466.333,283.167 467,251.5C 474.342,238.14 482.175,225.14 490.5,212.5 Z"/></g>
    <g><path className={classes.bluePath} d="M 432.5,231.5 C 442.172,231.334 451.839,231.5 461.5,232C 467.259,235.892 467.926,240.559 463.5,246C 456.254,247.391 448.921,247.891 441.5,247.5C 441.667,280.502 441.5,313.502 441,346.5C 437.004,351.3 432.67,351.633 428,347.5C 426.346,310.585 426.013,273.585 427,236.5C 428.107,233.887 429.94,232.22 432.5,231.5 Z"/></g>
    <g><path className={classes.bluePath} d="M 392.5,265.5 C 400.507,265.334 408.507,265.5 416.5,266C 424.5,271 424.5,276 416.5,281C 411.511,281.499 406.511,281.666 401.5,281.5C 401.667,302.503 401.5,323.503 401,344.5C 396.333,349.833 391.667,349.833 387,344.5C 386.333,319.5 386.333,294.5 387,269.5C 388.5,267.531 390.333,266.198 392.5,265.5 Z"/></g>
    <g><path className={classes.bluePath} d="M 898.5,452.5 C 942.835,452.333 987.168,452.5 1031.5,453C 1034.37,454.393 1035.7,456.726 1035.5,460C 1035.7,463.274 1034.37,465.607 1031.5,467C 987.167,467.667 942.833,467.667 898.5,467C 895.634,465.607 894.301,463.274 894.5,460C 894.43,456.634 895.763,454.134 898.5,452.5 Z"/></g>
    <g><path className={classes.bluePath} d="M 243.5,464.5 C 285.501,464.333 327.501,464.5 369.5,465C 372.366,466.393 373.699,468.726 373.5,472C 373.699,475.274 372.366,477.607 369.5,479C 327.5,479.667 285.5,479.667 243.5,479C 240.484,477.471 239.151,474.971 239.5,471.5C 239.197,468.156 240.53,465.822 243.5,464.5 Z"/></g>
    <g><path className={classes.bluePath} d="M 925.5,479.5 C 944.503,479.333 963.503,479.5 982.5,480C 988.509,484.314 988.843,488.981 983.5,494C 963.5,494.667 943.5,494.667 923.5,494C 919.002,488.32 919.669,483.487 925.5,479.5 Z"/></g>
    <g><path className={classes.bluePath} d="M 235.5,490.5 C 260.502,490.333 285.502,490.5 310.5,491C 314.136,493.039 315.802,496.206 315.5,500.5C 404.501,500.333 493.501,500.5 582.5,501C 588.729,505.171 589.062,509.837 583.5,515C 490.167,515.667 396.833,515.667 303.5,515C 300.38,512.592 299.047,509.426 299.5,505.5C 277.831,505.667 256.164,505.5 234.5,505C 231.606,502.091 230.773,498.591 232,494.5C 232.69,492.65 233.856,491.316 235.5,490.5 Z"/></g>
    <g><path className={classes.bluePath} d="M 614.5,498.5 C 714.167,498.333 813.834,498.5 913.5,499C 918.535,502.013 919.702,506.18 917,511.5C 916.25,512.126 915.416,512.626 914.5,513C 814.167,513.667 713.833,513.667 613.5,513C 608.003,507.683 608.336,502.85 614.5,498.5 Z"/></g>
    <g><path className={classes.bluePath} d="M 566.5,526.5 C 588.169,526.333 609.836,526.5 631.5,527C 637.786,529.362 639.453,533.529 636.5,539.5C 635.335,540.584 634.002,541.417 632.5,542C 610.167,542.667 587.833,542.667 565.5,542C 560.774,539.612 559.274,535.778 561,530.5C 562.5,528.531 564.333,527.198 566.5,526.5 Z"/></g>
    <g><path className={classes.bluePath} d="M 276.5,527.5 C 314.501,527.333 352.501,527.5 390.5,528C 396.552,532.223 396.885,536.889 391.5,542C 353.167,542.667 314.833,542.667 276.5,542C 272.788,539.487 271.622,535.987 273,531.5C 274.376,530.295 275.542,528.962 276.5,527.5 Z"/></g>
    <g><path className={classes.bluePath} d="M 738.5,532.5 C 777.168,532.333 815.835,532.5 854.5,533C 860.062,538.163 859.729,542.829 853.5,547C 815.167,547.667 776.833,547.667 738.5,547C 735.634,545.607 734.301,543.274 734.5,540C 734.43,536.634 735.763,534.134 738.5,532.5 Z"/></g>
    <g><path className={classes.bluePath} d="M 355.5,556.5 C 438.167,556.333 520.834,556.5 603.5,557C 609.075,562.115 608.742,566.781 602.5,571C 520.5,571.667 438.5,571.667 356.5,571C 350.367,566.613 350.033,561.78 355.5,556.5 Z"/></g>
    <g><path className={classes.bluePath} d="M 844.5,558.5 C 880.502,558.333 916.502,558.5 952.5,559C 957.833,563.667 957.833,568.333 952.5,573C 916.833,573.667 881.167,573.667 845.5,573C 839.231,568.657 838.898,563.824 844.5,558.5 Z"/></g>
    <g><path className={classes.cyanPath} d="M 197.5,608.5 C 245.833,608.5 294.167,608.5 342.5,608.5C 342.5,622.5 342.5,636.5 342.5,650.5C 296.832,650.333 251.165,650.5 205.5,651C 192.103,652.4 183.603,659.566 180,672.5C 178,698.5 178,724.5 180,750.5C 183.451,762.947 191.618,770.113 204.5,772C 250.499,772.5 296.499,772.667 342.5,772.5C 342.5,786.5 342.5,800.5 342.5,814.5C 293.499,814.667 244.499,814.5 195.5,814C 161.97,812.133 142.803,794.633 138,761.5C 137.333,728.167 137.333,694.833 138,661.5C 140.962,636.219 154.462,619.719 178.5,612C 184.933,610.597 191.267,609.43 197.5,608.5 Z"/></g>
    <g><path className={classes.cyanPath} d="M 399.5,608.5 C 413.837,608.333 428.171,608.5 442.5,609C 483.022,655.888 523.189,703.054 563,750.5C 563.5,703.168 563.667,655.835 563.5,608.5C 577.5,608.5 591.5,608.5 605.5,608.5C 605.5,677.167 605.5,745.833 605.5,814.5C 591.163,814.667 576.829,814.5 562.5,814C 522.215,767.26 482.048,720.426 442,673.5C 441.5,720.499 441.333,767.499 441.5,814.5C 427.5,814.5 413.5,814.5 399.5,814.5C 399.5,745.833 399.5,677.167 399.5,608.5 Z"/></g>
    <g><path className={classes.cyanPath} d="M 722.5,608.5 C 753.86,608.071 785.193,608.571 816.5,610C 848.538,615.71 865.371,634.876 867,667.5C 867.667,696.833 867.667,726.167 867,755.5C 864.167,791.667 844.667,811.167 808.5,814C 778.833,814.667 749.167,814.667 719.5,814C 683.4,810.566 664.233,790.732 662,754.5C 661.333,725.833 661.333,697.167 662,668.5C 664.815,630.851 684.982,610.851 722.5,608.5 Z M 725.5,650.5 C 749.502,650.333 773.502,650.5 797.5,651C 813.546,652.713 822.712,661.546 825,677.5C 825.667,700.167 825.667,722.833 825,745.5C 822.833,761 814,769.833 798.5,772C 775.833,772.667 753.167,772.667 730.5,772C 714.546,769.712 705.713,760.546 704,744.5C 703.333,722.167 703.333,699.833 704,677.5C 704.565,662.953 711.732,653.953 725.5,650.5 Z"/></g>
    <g><path className={classes.cyanPath} d="M 924.5,608.5 C 992.833,608.5 1061.17,608.5 1129.5,608.5C 1129.5,622.5 1129.5,636.5 1129.5,650.5C 1061.17,650.5 992.833,650.5 924.5,650.5C 924.5,636.5 924.5,622.5 924.5,608.5 Z"/></g>
    <g><path className={classes.cyanPath} d="M 924.5,690.5 C 992.833,690.5 1061.17,690.5 1129.5,690.5C 1129.5,704.5 1129.5,718.5 1129.5,732.5C 1061.17,732.5 992.833,732.5 924.5,732.5C 924.5,718.5 924.5,704.5 924.5,690.5 Z"/></g>
    <g><path className={classes.cyanPath} d="M 924.5,772.5 C 992.833,772.5 1061.17,772.5 1129.5,772.5C 1129.5,786.5 1129.5,800.5 1129.5,814.5C 1061.17,814.5 992.833,814.5 924.5,814.5C 924.5,800.5 924.5,786.5 924.5,772.5 Z"/></g>
    </svg>
  );
};