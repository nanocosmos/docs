# RTMP Quality Statistics
## Description
The RTMP Module provides the current RTMP Quality over the 'NanostreamEventListener'. These includes the 'output bit rate', 'buffer fullness', 'bit rate' and 'frame rate'.
### Implementation Example
```java
public class MainActivity extends Activity implements NanostreamEventListener {
  private LinearLayout qualityView = null;
	private TextView outputBitrate = null;
	private TextView bufferFullness = null;
	private TextView bitrate = null;
	private TextView framerate = null;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    qualityView = (LinearLayout) findViewById(R.id.qualityView);
		outputBitrate = (TextView) findViewById(R.id.outputBitrateText);
		bufferFullness = (TextView) findViewById(R.id.bufferfillnessText);
		bitrate = (TextView) findViewById(R.id.bitrateText);
		framerate = (TextView) findViewById(R.id.framerateText);

    // Init nanoStream
  }

  @Override
	public void onNanostreamEvent(NanostreamEvent event)
	{
		if (event.GetType() == NanostreamEvent.TYPE_RTMP_QUALITY)
		{
			this.runOnUiThread(new ViewQualityRunnable(event));
		}
	}

  private class ViewQualityRunnable implements Runnable
	{
		private NanostreamEvent m_event;
		private DecimalFormat format;

		public ViewQualityRunnable(NanostreamEvent m_event)
		{
			super();
			this.m_event = m_event;
			format = new DecimalFormat("#0.00");
		}

		@Override
		public void run()
		{
			if (qualityView.getAlpha() == 0 && m_event.GetParam1() != 0 && m_event.GetParam2() != 0 && m_event.GetParam3() != 0 && m_event.GetParam4() != 0)
			{
				qualityView.setAlpha(0.5f);
			}
			int qualityColor = Color.YELLOW;
			if (m_event.GetParam2() >= 1000)
			{
				qualityColor = Color.rgb(255, 0, 0);
			} else if (m_event.GetParam2() >= 750)
			{
				qualityColor = Color.YELLOW;
			} else if (m_event.GetParam2() <= 750)
			{
				qualityColor = Color.GREEN;
			}

			outputBitrate.setText(Long.toString(m_event.GetParam1() / 1000) + "kbit/s");
			outputBitrate.setTextColor(qualityColor);
			bufferFullness.setText(format.format(((double) m_event.GetParam2() / 100.0)) + "%");
			bufferFullness.setTextColor(qualityColor);
			bitrate.setText(Long.toString(m_event.GetParam3() / 1000) + "kbit/s");
			framerate.setText(m_event.GetParam4() + "fps");

		}
	}
}
```
